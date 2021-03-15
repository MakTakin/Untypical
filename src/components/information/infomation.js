import React from 'react'
import { Redirect } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {  UserButton } from '../ui/buttons';
import { showModal } from '../../redux/actions/actions';
import { Header } from '../ui/headers';
import { BackLink } from '../ui/links';

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #ccdbf7;
    padding: 10px;
    border-radius: 5px;
    div {
        margin-bottom: 10px;
    }
    button {
        margin-left: auto;
    }
`

const Info = styled.div``

const Information = (props) => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.id == props.match.params.id)
    return (
        <>
            { currentUser ?
            <>
                <BackLink to='/'>Back to users</BackLink>
                <Header>Information about User</Header>
                <UserContainer>
                    <Info>
                        name: <b>{currentUser.name}</b>
                    </Info>
                    <Info>
                        middlename: <b>{currentUser.middlename}</b>
                    </Info>
                    <Info>
                        lastname: <b>{currentUser.lastname}</b>
                    </Info>
                    <Info>
                        email: <b>{currentUser.email}</b>
                    </Info>
                    <Info>
                        sex: <b>{currentUser.sex}</b>
                    </Info>
                    <UserButton
                        onClick={() => dispatch(showModal('UPDATE_USER', currentUser))}
                        variant="contained"
                        color="primary">
                        Edit User
                    </UserButton>
                </UserContainer>
            </> :
            <Redirect to='/'/>
             }

        </>
    )
}
export default Information