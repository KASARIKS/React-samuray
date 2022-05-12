// Container component which getting YOUR user data

import React from "react";
import Header from "./Header";
import { toggleIsFetching, setUserData, getMyProfileThunkCreator, logoutThunkCreator, initializeThunkCreator } from "../../state/auth-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

class HeaderContainerC extends React.Component {
    componentDidMount() {
        this.props.initialize(toggleIsFetching)
        //this.props.toggleIsFetching(true)
        //this.props.getMyProfile(this.props.toggleIsFetching)
    }

    render() {
        if (!this.props.initialized) {
            return (
                <Preloader />
            )
        }
        return (
            <Header {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        initialized: state.auth.initialized
    }
}

let callbacks = {
    toggleIsFetching: toggleIsFetching,
    setUserData: setUserData,
    getMyProfile: getMyProfileThunkCreator,
    logout: logoutThunkCreator,
    initialize: initializeThunkCreator,
}

const HeaderContainer = compose(
    connect(mapStateToProps, callbacks)
)(HeaderContainerC)

export default HeaderContainer