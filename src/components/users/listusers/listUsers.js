import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Header } from '../../ui/headers';
import User from './user/user';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { showMale } from '../../../redux/actions/actions';

const Users = styled.ul`
    height: 75vh;
    padding-left: 0;
    padding-right: 10px;
    overflow-y: auto;
    list-style: none;
    ::-webkit-scrollbar {
        background: #F2F2F2;
        border-radius: 2px;
        width: 8px; 
    }
    ::-webkit-scrollbar-thumb {
        background: #BDBDBD;
        border-radius: 2px;
    }
    scrollbar-color: #BDBDBD #F2F2F2;
`

const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const showOnlyMale = useSelector(state => state.users.showMale)
    const visibleUsers = showOnlyMale ? users.filter( user => user.sex === 'male') : users

    const listUsers = visibleUsers.map(user => {
        return(
            <User
                key={user.id}
                user={user}
            />
        )
    })
    return (
        <>
            {users.length > 0 ?
                <>
                    <Header> List of Users</Header>
                    <FormControlLabel
                        control={
                        <Checkbox
                        // checked={state.checkedB}
                        onChange={() => dispatch(showMale())}
                        name="male"
                        color="primary"
                        />
                        }
                        label="Show Only Male"
                    />
                    <Users>
                        {listUsers}
                    </Users>
                </> :
                <Header> Users aren't yet </Header>
            }
        </>
    )
}
export default ListUsers