import {
    ADD_USER,
    REDACT_USER,
    DELETE_USER,
    SHOW_MODAL,
    HIDE_MODAL,
    USERS_ERROR,
    DELETE_USERS_ERROR,
    SHOW_MALE,
    SEARCH_USER
} from './types';

export const addUser = ( user ) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const deleteUser = ( id ) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export const redactUser = ( user ) => {
    return {
        type: REDACT_USER,
        payload: user,
        id: user.id
    }
}

export const usersError = ( ) => {
    return {
        type: USERS_ERROR,
        payload: 'Введите корректные данные в обязательные поля'
    }
}

export const deleteUsersError = ( ) => {
    return {
        type: DELETE_USERS_ERROR,
    }
}

export const showModal = ( type, props ) => {
    return {
        type: SHOW_MODAL,
        modalType: type,
        modalProps: props
    }
}

export const hideModal = ( ) => {
    return {
        type: HIDE_MODAL
    }
}

export const showMale = ( ) => {
    return {
        type: SHOW_MALE
    }
}

export const searchUser = ( term ) => {
    return {
        type: SEARCH_USER,
        payload: term
    }
}