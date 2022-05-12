// Container component for component Users

import { setCurrentPage, setPageCountTmp, toggleIsFetching } from "../../state/users-reducer";
import { unfollow } from "../../state/users-reducer";
import { follow } from "../../state/users-reducer";
import { connect } from 'react-redux'
import React from "react";
import Users from "./Users";
import fetch_img from './images/b4d657e7ef262b88eb5f7ac021edda87.gif'
import Preloader from "../common/Preloader/Preloader";
import { toggleIsFollowing } from "../../state/auth-reducer";
import { getUsersThunkCreator, followThunkCreator } from "../../state/users-reducer";
import { compose } from "redux";
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsersSuper, get_count_page_tmp } from "../../state/selectors/users-selectors";

class UsersAPIcomponent extends React.Component {

    // Display users callback
    getUsersLocal = (page_num) => {
        this.props.toggleIsFetching(true)
        this.props.getUsers(page_num, this.props.pageSize)
    }

    componentDidMount() {
        this.getUsersLocal(this.props.currentPage)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader fetch_img={fetch_img} /> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    count_page_tmp={this.props.count_page_tmp}
                    setPageCountTmp={this.props.setPageCountTmp}
                    setCurrentPage={this.props.setCurrentPage}
                    getUsersLocal={this.getUsersLocal}
                    usersData={this.props.usersData}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleIsFollowing={this.props.toggleIsFollowing}
                    isFollowingInProcess={this.props.isFollowingInProcess}
                    followThunk={this.props.followThunk}
                    isAuth={this.props.isAuth}
                />

            </>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         usersData: state.users.usersData,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         count_page_tmp: state.users.count_page_tmp,
//         isFetching: state.users.isFetching,
//         isFollowingInProcess: state.auth.isFollowingInProcess,
//         isAuth: state.auth.isAuth,
//     }
// }

const mapStateToProps = (state) => {
    return {
        usersData: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        count_page_tmp: get_count_page_tmp(state),
        isFetching: getIsFetching(state),
        isFollowingInProcess: state.auth.isFollowingInProcess,
        isAuth: state.auth.isAuth,
    }
}

let callbacks = {
    follow,
    unfollow,
    setCurrentPage,
    setPageCountTmp,
    toggleIsFetching,
    toggleIsFollowing,
    getUsers: getUsersThunkCreator,
    followThunk: followThunkCreator,
}

export default compose(
    connect(mapStateToProps, callbacks),
)(UsersAPIcomponent)