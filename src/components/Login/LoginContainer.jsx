// Login form, Container component for LoginForm

import { connect } from 'react-redux'
import React from 'react'
import { compose } from 'redux'
import LoginForm from './LoginForm/LoginForm'
import { loginThunkCreator } from '../../state/auth-reducer'

export class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm state={this.props.login_state} LoginSubmit={this.props.LoginSubmit} isAuth={this.props.isAuth}/>
      </div>
    )
  }
}

function mapDispatchToProps(state) {
  return {
    state: state,
    login_state: {
      email: '',
      password: '',
      remember_me: false,
      captcha: true,
    },
    isAuth: state.auth.isAuth,
  }
}

let callbacks = {
  LoginSubmit: loginThunkCreator
}

export default compose(
  connect(mapDispatchToProps, callbacks),
)(LoginContainer)