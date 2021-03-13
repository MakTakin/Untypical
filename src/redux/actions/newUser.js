
import { addUser, hideModal } from './actions';

export const newUser = (user) => (dispatch) => {
        dispatch(hideModal())
        dispatch(addUser(user))
}