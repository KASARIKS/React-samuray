const ADD_MESSAGE = 'ADD-MESSAGE'
const SET_MESSAGE_TEXT = 'SET-MESSAGE-TEXT'

// initialState
// message_text changes by callback
// messagesData - array of message objects, id, text, user_id
// usersData - array of user objects, id, name !NOT USERS FROM SERVER!
let initialState = {
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
    
}

function dialogsReducer(state=initialState, action) {
    let state_copy = {...state}
    function addMessage() {
        state_copy.messagesData = [...state.messagesData, { id: state.message_id, text: state.message_text, user_id: 1 }]
        state_copy.message_id++
        setMessageText('')
    }
    function setMessageText(text) {
        state_copy.message_text = text
    }

    switch (action.type) {
        case SET_MESSAGE_TEXT:
            setMessageText(action.text)
            break

        case ADD_MESSAGE:
            addMessage()
            break

        default:
            break;
    }

    return state_copy
}

export default dialogsReducer

// Action creators
export function addMessageActionCreator() {
    return { type: ADD_MESSAGE }
}

export function setMessageTextCreator(text) {
    return { type: SET_MESSAGE_TEXT, text: text }
}