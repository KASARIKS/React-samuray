// Container component which decides what user will be on page
// Maps user data to props of next components

import React from 'react'
import './App.css'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile, toggleIsFetching, getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, setStatusActionCreator } from '../../state/profile-reducer'
import Preloader from '../common/Preloader/Preloader'
import fetch_img from './images/b4d657e7ef262b88eb5f7ac021edda87.gif'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import withAuthRedirect from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getMyProfileThunkCreator } from '../../state/auth-reducer'

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export class ProfileContainerC extends React.Component {


    getUsersLocal = () => {
        let userId = this.props.router.params.userId;
        // If you didn`t click on user and go to profile you will see your profile
        if (!userId) {
            this.props.toggleIsFetching(true)
            this.props.getMyProfile(this.props.toggleIsFetching)
            userId = this.props.userId
        }
        // Loading image
        if (this.props.isFetching) {
            <Preloader fetch_img={fetch_img} />
        }
        this.props.getProfile(this.props.toggleIsFetching, userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.getUsersLocal(23)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader fetch_img={fetch_img} /> : null}
                <Profile {...this.props} user_profile={this.props.user_profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        user_profile: state.profile.user_profile,
        isFetching: state.profile.isFetching,
        status: state.profile.status,
        userId: state.auth.userId,
    }
}

let callbacks = {
    setUserProfile,
    toggleIsFetching,
    getProfile: getProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    setStatus: setStatusActionCreator,
    getMyProfile: getMyProfileThunkCreator,
}


export default compose(
    withRouter,
    connect(mapStateToProps, callbacks),
    withAuthRedirect
)(ProfileContainerC)