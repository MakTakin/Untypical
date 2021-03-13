import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import User from './user/user';

const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    console.log(users)
    const listUsers = users.map(user => {
        return(
            <User
                key={user.id}
                user={user}
            />
        )
    })
    return (
        <ul>
            {listUsers}
        </ul>
    )
}
export default ListUsers