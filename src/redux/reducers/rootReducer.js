import {combineReducers} from 'redux'
import { UsersReducer } from './usersReducer';
import { ModalReducer } from './modalReducer';

export const rootReducer = combineReducers( {
    users: UsersReducer,
    modal: ModalReducer
})