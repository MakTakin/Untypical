import {
    ADD_USER,
    DELETE_USER,
    DELETE_USERS_ERROR,
    REDACT_USER,
    SHOW_MALE,
    USERS_ERROR
} from '../actions/types';

const initiallState = {
    users: [],
    showMale: false,
    error: '',
}

export const UsersReducer = (state = initiallState, action) => {
    switch (action.type) {

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

        case USERS_ERROR:
            return {
                ...state,
                error: action.payload,
            }

        case DELETE_USERS_ERROR:
            return {
                ...state,
                error: '',
            }

        case SHOW_MALE:
            return {
                ...state,
                showMale: !state.showMale
            }

        default:
            return state
    }
}