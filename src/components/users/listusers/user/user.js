import React from 'react'
import styled from 'styled-components'
import { deleteUser } from '../../../../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { UserLink } from '../../../ui/links';
import { UserButton } from '../../../ui/buttons';

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
    button {
        margin-bottom: 10px;
    }
    
    &:hover {
        ${UserButtons} {
            display: flex;
        }
    }
`

const UserInfo = styled.div`
   div {
        margin-bottom: 10px;
   } 
`

const UserEmail = styled.div``

const UserName = styled.div``

const UserSex = styled.div``

const User = ({ user }) => {
    const dispatch = useDispatch()

    return (
        <UserContainer>
            <UserInfo>
            <UserName>Name: <b>{user.name}</b></UserName>
            <UserSex>Sex: <b>{user.sex}</b></UserSex>
            <UserEmail>Email: <b>{user.email}</b></UserEmail>
            </UserInfo>
            <UserButtons>
                <UserButton
                    variant='outlined'
                    color='primary'
                    onClick={() => dispatch(deleteUser(user.id))}
                >
                    Delete User
                </UserButton>
                <UserButton
                    variant='outlined'
                    color='primary'
                    component={UserLink}
                    to={`/${user.id}`}
                >
                    Information
                </UserButton>
            </UserButtons>
        </UserContainer>
    )
}
export default User