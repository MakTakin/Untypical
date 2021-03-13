import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { EditUserButton } from '../ui/buttons';
import { changeActivateUser, showModal } from '../../redux/actions/actions';
import Button from '@material-ui/core/Button';

const MoreInformation = (props) => {
    const dispatch = useDispatch()
    const activateUser = useSelector(state => state.users.activateUser)
    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.id == props.match.params.id)
    return (
        <div>
            <div>
                name: {currentUser.name}
            </div>
            <div>
                middlename: {currentUser.middlename}
            </div>
            <div>
                lastname: {currentUser.lastname}
            </div>
            <div>
                email: {currentUser.email}
            </div>
            <div>
                sex: {currentUser.sex}
            </div>

            <Button
                onClick={() => dispatch(showModal('UPDATE_USER',currentUser))}
                variant="contained"
                color="primary">
                Edit User
            </Button>
        </div>
    )
}
export default MoreInformation