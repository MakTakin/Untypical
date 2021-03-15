import React, { useState } from 'react'
import Form from './form/form';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { newUser } from '../../redux/actions/newUser';
import { onValidation } from '../../helpers/validation';
import { usersError } from '../../redux/actions/actions';

const AddUserForm = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        id: uuid(),
        name: '',
        lastname: '',
        middlename: '',
        email: '',
        sex: 'male'
    })

    const createUserFunc = (e) => {
        e.preventDefault()
        const validation = onValidation(user)
        if (validation) {
            dispatch(newUser(user))
        } else {
            dispatch(usersError())
        }
    }

    return (
        <Form
            setUser={setUser}
            user={user}
            onSubmit={createUserFunc}
        />
    )
}
export default AddUserForm