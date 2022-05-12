// (HOC) Component checks a property isAuth from props, and call Navigate if false, or Component from argument (profile and users)

import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'} />
            return <Component {...this.props} />
        }
    }

    let AuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return AuthRedirectComponent
}

export default withAuthRedirect