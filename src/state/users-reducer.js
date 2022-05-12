import { usersAPI } from "../api/api"
//import store from './redux-store'

const FOLLOW = 'FOLOW'
const UNFOLOW = 'UNFOLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_COUNT_PAGE_TMP = 'SET_COUNT_PAGE_TMP'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

// Initial state, 
// usersData - array of user objects with id, login, email etc
// isFetching - flag of follow process
let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    count_page_tmp: 1,
    isFetching: false,
}

// setInterval(() => {
//     // Imitation of dispatching to store
//     console.log('Fake dispatched')
// }, 1000)

function usersReducer(state = initialState, action) {
    function setFolow(user, folow_value) {
        if (user.id === action.user_id) {
            return { ...user, followed: folow_value }
        }
        return user
    }

    switch (action.type) {
        case 'FAKE':
            return {
                ...state,
                fake: state.fake + 1
            }
        case FOLLOW:
            return {
                ...state, usersData: state.usersData.map((user) => {
                    return setFolow(user, true)
                })
            }

        case UNFOLOW:
            return {
                ...state, usersData: state.usersData.map((user) => {
                    return setFolow(user, false)
                })
            }

        case SET_USERS:
            return {
                ...state, usersData: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.number
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }

        case SET_COUNT_PAGE_TMP:
            return {
                ...state, count_page_tmp: action.page_number
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state
    }
}

export default usersReducer

// Action creators
export function follow(user_id) {
    return { type: FOLLOW, user_id: user_id }
}

export function unfollow(user_id) {
    return { type: UNFOLOW, user_id: user_id }
}

export function setUsers(users) {
    return { type: SET_USERS, users }
}

export function setCurrentPage(number) {
    return { type: SET_CURRENT_PAGE, number }
}

export function setTotalUsersCount(totalCount) {
    return { type: SET_TOTAL_USERS_COUNT, totalCount }
}

export function setPageCountTmp(page_number) {
    return { type: SET_COUNT_PAGE_TMP, page_number }
}

export function toggleIsFetching(isFetching) {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

// Thunk which change users in initialState, simply it used for changing usersPage
export const getUsersThunkCreator = (page_num, pageSize) => {
    return dispatch => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(page_num, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

// Thunk which follow or unfollow, and set a status of follow process
export const followThunkCreator = (user_id, follow_callback, follow_callback_api, toggleIsFollowing) => {
    return dispatch => {
        dispatch(toggleIsFetching(true))
        toggleIsFollowing(true, user_id)
        follow_callback_api(user_id)
            .then((data) => {
                dispatch(toggleIsFetching(false, user_id))
                toggleIsFollowing(false, user_id)
                if (data.resultCode === 0) follow_callback(user_id)
            })
    }
}