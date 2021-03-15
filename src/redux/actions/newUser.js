import { addUser, deleteUsersError, hideModal } from './actions';

export const newUser = (user) => (dispatch) => {
        dispatch(hideModal())
        dispatch(deleteUsersError())
        dispatch(addUser(user))
}