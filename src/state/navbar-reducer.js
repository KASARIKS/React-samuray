// Useless reducer for Navbar

let initialState = {
    friends: [
        { name: 'Yarik' },
        { name: 'Vanya' },
        { name: 'Petya' }
    ]
}

function navbarReducer(state=initialState, action) {
    let state_copy = {...state}
    return state_copy
}

export default navbarReducer