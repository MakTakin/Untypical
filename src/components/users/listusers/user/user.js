import React from 'react'
import styled from 'styled-components'
import { deleteUser, showModal } from '../../../../redux/actions/actions';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { UserLink } from '../../../ui/links';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from "react-router-dom"

const UserButtons = styled.div`
    display: none;
    flex-direction: column;
    justify-content: space-between;
`

const UserContainer = styled.li`
    display: flex;
    justify-content: space-between;
    background: #ccdbf7;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    div, button {
        margin-bottom: 5px;
    }
    
    &:hover {
        ${UserButtons} {
            display: flex;
        }
    }
`
const User = ({ user }) => {
    const dispatch = useDispatch()

    return (
        <UserContainer>
            <div>
            <div>name: <b>{user.name}</b></div>
            <div>email: <b>{user.email}</b></div>
            </div>
            <UserButtons>
                <Button
                    variant='outlined'
                    color='primary'

                    onClick={() => dispatch(deleteUser(user.id))}
                >
                    Delete User
                </Button>
                <Link
                    component={RouterLink}
                    to={`/${user.id}`}
                >
                    More Information
                </Link>
            </UserButtons>
        </UserContainer>
    )
}
export default User