import React from 'react'
import styled from 'styled-components'
import ListUsers from './listusers/listUsers';
import Button from '@material-ui/core/Button';
import { showModal } from '../../redux/actions/actions';
import { useDispatch } from 'react-redux';


const Users = () => {
    const dispatch = useDispatch()
    return (
        <>
            <ListUsers/>
            <Button
                onClick={() => dispatch(showModal('ADD_USER'))}
                variant="contained"
                color="primary">
                Add User
            </Button>
        </>
    )
}
export default Users