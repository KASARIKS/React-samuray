// Users List

import React from 'react'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import FollowBtn from './FollowBtn/FollowBtn'
import ava_default from './images/favicon.ico'

// Follow buttons, will not display if isAuth == false
const Buttons = (props) => {
    return (
        <>
            {
                props.user_el.followed
                    ? <FollowBtn
                        toggleIsFetching={props.toggleIsFetching}
                        toggleIsFollowing={props.toggleIsFollowing}
                        follow_callback_api={props.unfollow_api}
                        follow_callback={props.unfollow}
                        user_id={props.user_el.id}
                        text={'Unfollow'}
                        isFollowingInProcess={props.isFollowingInProcess}
                        followThunk={props.followThunk}
                        isAuth={props.isAuth}
                    />
                    : <FollowBtn
                        toggleIsFetching={props.toggleIsFetching}
                        toggleIsFollowing={props.toggleIsFollowing}
                        follow_callback_api={props.follow_api}
                        follow_callback={props.follow}
                        user_id={props.user_el.id}
                        text={'Follow'}
                        isFollowingInProcess={props.isFollowingInProcess}
                        followThunk={props.followThunk}
                        isAuth={props.isAuth}
                    />
            }
        </>
    )
}

const Users = (props) => {
    // Math part, needs for counting page size and number of users on one page
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i)
    }
    //------------------------------------------------------------------------

    return (
        <div>
            <div>
                <div>
                    {
                        // pages.map(page_num => <button onClick={() => {
                        //     props.setCurrentPage(page_num)
                        //     props.getUsersLocal(page_num)
                        // }}>{page_num}</button>)
                    }
                    <input value={props.count_page_tmp} onChange={el => {
                        (props.count_page_tmp >= 1 && props.count_page_tmp <= pagesCount)
                            ?
                            props.setPageCountTmp(el.target.value)
                            :
                            props.setPageCountTmp(1)
                    }}></input>
                    <div>Last page number: {pagesCount}</div>
                    <button onClick={() => {
                        props.setCurrentPage(props.count_page_tmp)
                        props.getUsersLocal(props.count_page_tmp)
                    }}>Select page</button>
                </div>
                {
                    // Follow-changer for every user on page
                    props.usersData.map((user_el) =>
                        <div key={user_el.id}>
                            {
                                props.isAuth
                                    ?
                                    <Buttons
                                        user_el={user_el}
                                        toggleIsFetching={props.toggleIsFetching}
                                        toggleIsFollowing={props.toggleIsFollowing}
                                        unfollow_api={usersAPI.unfollow_api}
                                        follow_api={usersAPI.follow_api}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        isFollowingInProcess={props.isFollowingInProcess}
                                        followThunk={props.followThunk}
                                        isAuth={props.isAuth}
                                    />
                                    :
                                    null
                            }
                            <br></br>

                            {/* NavLink to user profile by id, in fact it`s a img */}
                            <NavLink to={'/profile/' + user_el.id}>
                                {
                                    user_el.photos.small === null
                                        ?
                                        <img src={ava_default} alt='user-avatar-big'></img>
                                        :
                                        <img src={user_el.photos.small} alt='user-avatar-small'></img>
                                }
                            </NavLink>

                            {/* User name and status */}
                            <span>
                                <div>{user_el.name}</div>
                                <div>{user_el.status}</div>
                            </span>
                            <hr></hr>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Users