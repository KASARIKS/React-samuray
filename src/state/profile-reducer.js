import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_POST_TEXT = 'SET-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

// initialState
// post_text changin by callbacks in MyPosts
// postsData - array of Post objects, id, text, likes_count
// user_profile - object with user profile, check server api documentation
// status changin by callbacks in ProfileStatus
let initialState = {
    post_text: '',
    postsData: [],
    post_id: 1,
    user_profile: null,
    status: '',
}

function profileReducer(state = initialState, action) {
    let state_copy = { ...state }
    function addPost() {
        state_copy.postsData = [...state.postsData]
        state_copy.postsData.push({ id: state.post_id, text: state.post_text, likes_count: 0 })
        state_copy.post_id++
        setPostText('')
    }
    function setPostText(text) {
        state_copy.post_text = text
    }

    switch (action.type) {
        case SET_POST_TEXT:
            setPostText(action.text)
            break;

        case ADD_POST:
            addPost()
            break

        case SET_USER_PROFILE:
            return { ...state, user_profile: action.user_profile }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case SET_STATUS:
            return {
                ...state, status: action.status
            }

        case DELETE_POST:
            let new_postsData = state.postsData.filter(post => post.id !== action.id)
            return {
                ...state, postsData: new_postsData
            }
        default:
            break;
    }

    return state_copy
}

export default profileReducer

// Action creators
export function addPostActionCreator() {
    return {
        type: ADD_POST
    }
}

export function setPostTextActionCreator(text) {
    return {
        type: SET_POST_TEXT,
        text: text
    }
}

export function setUserProfile(user_profile) {
    return {
        type: SET_USER_PROFILE,
        user_profile,
    }
}

export function toggleIsFetching(isFetching) {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

// Set user_profile to object, from server
export const getProfileThunkCreator = (toggleIsFetching, userId) => async dispatch => {
    let response = await usersAPI.getProfile(userId)
    toggleIsFetching(false)
    dispatch(setUserProfile(response.data))
}

// Change status
export const setStatusActionCreator = status => {
    return {
        type: SET_STATUS,
        status: status,
    }
}

// Get status from server by id
export const getStatusThunkCreator = id => async dispatch => {
    let response = await profileAPI.getStatus(id)
    dispatch(setStatusActionCreator(response.data))
}

// Change status on server, but only user`s status, which did a request, server rules
export const updateStatusThunkCreator = (status) => async dispatch => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatusActionCreator(status))
}

export const deletePostActionCreator = id => {
    return { type: 'DELETE_POST', id: id }
}