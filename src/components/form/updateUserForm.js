import React, { useState } from 'react'
import Form from './form/form';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/actions/updateUser';
import { onValidation } from '../../helpers/validation';
import { usersError } from '../../redux/actions/actions';

const UpdateUserForm = (redactUser) => {
    const dispatch = useDispatch()
    const [user, setUser] = useState(redactUser)

    const updateUserFunc = async (e) => {
        e.preventDefault()
        const validation = onValidation(user)
        if (validation) {
            dispatch(updateUser(user))
        } else {
            dispatch(usersError())
        }
    }

    return (
        <Form
            setUser={setUser}
            user={user}
            onSubmit={updateUserFunc}
        />
    )
}
export default UpdateUserForm