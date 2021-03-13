import { ADD_USER, CHANGE_ACTIVATE_USER, DELETE_USER, FETCH_USERS_FAILED, REDACT_USER } from '../actions/types';

const initiallState = {
    users: [],
    error: '',
    activateUser: false
}

export const UsersReducer = (state = initiallState, action) => {
    switch (action.type) {

        case CHANGE_ACTIVATE_USER:
            return {
                ...state,
                activateUser: action.payload,
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            }

        case REDACT_USER:
            return {
                ...state,
                users: state.users.map(user => user.id === action.id ? action.payload : user)
            }

        case FETCH_USERS_FAILED:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state
    }
}