
import {
    changeActivateUser,
     hideModal,
    redactUser
} from './actions';

export const updateUser = (user) => async (dispatch) => {
        dispatch(hideModal())
        dispatch(redactUser(user))
        dispatch(changeActivateUser(false))
}

