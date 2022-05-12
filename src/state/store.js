j// Old 'hand-made' store

import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"
import profileReducer from "./profile-reducer"

const store = {
    _state: {
        profile: {
            post_text: '',
            postsData: [
                { id: 1, text: 'post 1', likes_count: 15 },
                { id: 2, text: 'post 2', likes_count: 24 }
            ],
            post_id: 3,
            
        },
        dialogs: {
            message_text: '',
            message_id: 4,
            messagesData: [
                { id: 1, text: 'Hi', user_id: 1 },
                { id: 2, text: 'How are you', user_id: 1 },
                { id: 3, text: 'Good morning)', user_id: 1 }
            ],
            usersData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
            ],
            
        },
        navbar: {
            friends: [
                { name: 'Yarik' },
                { name: 'Vanya' },
                { name: 'Petya' }
            ]
        },
    },

    subscribe: function (observer) {
        store._callSubscriber = observer
    },
    getState: function () {
        return store._state
    },
    dispatch: function (action) {
        store._state.profile = profileReducer(store._state.profile, action);
        store._state.dialogs = dialogsReducer(store._state.dialogs, action);
        store._state.navbar = navbarReducer(store._state.navbar, action);
        store._callSubscriber(store._state)
    }
}




export default store