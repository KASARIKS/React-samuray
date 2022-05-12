import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
const SET_INITIALIZED = 'SET_INITIALIZED'

// initialState
// isFollowingInProcess - many usersId appends to this array when you clicks to the follow buttons very fast and server can`t handle all requests
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    isFollowingInProcess: [],
    initialized: false,
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowingInProcess: action.isFollowingInProcess
                    ? [...state.isFollowingInProcess, action.userId]
                    : state.isFollowingInProcess.filter(id => id !== action.userId)
            }

        case SET_INITIALIZED:
            return {
                ...state,
                initialized: action.initialized
            }

        default:
            return state
    }
}

export default authReducer

// Action creators
export function setUserData(userId, email, login, isAuth) {
    return { type: SET_USER_DATA, data: { userId, email, login, isAuth } }
}

export function toggleIsFetching(isFetching) {
    return { type: TOGGLE_IS_FETCHING, isFetching: isFetching }
}

export const toggleIsFollowing = (isFollowingInProcess, userId) => {
    return { type: TOGGLE_IS_FOLLOWING, isFollowingInProcess: isFollowingInProcess, userId: userId }
}

export const setInitializedActionCreator = (initialized) => {
    return { type: SET_INITIALIZED, initialized }
}

// This thunk set initialState of this reducer, then this initialState sends to server and displays
export const getMyProfileThunkCreator = (toggleIsFetching) => {
    return dispatch => {
        return authAPI.getMyProfile()
            .then(response => {
                toggleIsFetching(false)
                let { id, login, email } = response.data.data
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}

export const loginThunkCreator = (login_state, setStatus) => (dispatch) => {
    authAPI.login(login_state)
        .then(response => {
            toggleIsFetching(false)
            if (response.data.resultCode === 0) {
                dispatch(getMyProfileThunkCreator(toggleIsFetching))
            }
            else {
                setStatus({ error: response.data.messages })
            }
        })
}

export const logoutThunkCreator = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            toggleIsFetching(false)
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export const initializeThunkCreator = (toggleIsFetching) => (dispatch) => {
    toggleIsFetching(true)
    dispatch(getMyProfileThunkCreator(toggleIsFetching))
        .then(() => {
            dispatch(setInitializedActionCreator(true))
        })
}