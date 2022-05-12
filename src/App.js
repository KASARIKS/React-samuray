// App component

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import React from 'react';
import store from './state/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <div className="App">
            <HeaderContainer />
            <div className='page-content'>
              <Navbar />

              {/* 
              When Navbar clicked, Routes checking Navlinks 
              /profile/:userId needs to another users displaing
              /profile/* needs to displaing profile
            */}
              <Routes>
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/profile/*' element={<ProfileContainer />} />
                <Route path='/messages/*' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/login' element={<LoginContainer />} />
                <Route path='/profile/*' element={<Main />} />
              </Routes>

            </div>
          </div>
        </React.StrictMode>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
