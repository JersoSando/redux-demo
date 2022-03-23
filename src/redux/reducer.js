// Initial state
const initialState = {
    name: null,
    age: null,
    location: null
}

// Action type 
const ADD_NAME = 'ADD_NAME'
const ADD_AGE = 'ADD_AGE'
const ADD_LOCATION = 'ADD_LOCATION'

//Action Functions
export const addName = (name) => {
    return {
        type: ADD_NAME,
        payload: name
    }
}

export const addAge = (age) => {
    return {
        type: ADD_AGE,
        payload: age
    }
}

export const addLocation = (location) => {
    return {
        type: ADD_LOCATION,
        payload: location
    }
}

// Reducer Function
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NAME:
            const name = action.payload
            return {...state, name: name} //new object where we spread in state and replace the name of that state and pass in the payload
        case ADD_AGE:
            const age = action.payload
            return {...state, age: age}
        case ADD_LOCATION:
            const location = action.payload
            return {...state, location: location}
        default:
                return state
    }
}

export default reducer