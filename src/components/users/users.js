import React from 'react'
import ListUsers from './listusers/listUsers';
import { showModal } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { AddUserButton } from '../ui/buttons';


const Users = () => {
    const dispatch = useDispatch()
    return (
        <>
            <ListUsers/>
            <AddUserButton
                onClick={() => dispatch(showModal('ADD_USER'))}
                variant="contained"
                color="primary">
                Add User
            </AddUserButton>
        </>
    )
}
export default Users