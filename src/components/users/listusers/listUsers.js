import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Header } from '../../ui/headers';
import User from './user/user';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { searchUser, showMale } from '../../../redux/actions/actions';
import { Search } from '../../ui/inputs';

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

const UsersBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10px;
`

const ListUsers = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const search = useSelector(state => state.users.searchUser)
    const showOnlyMale = useSelector(state => state.users.showMale)
    const visibleUsers = showOnlyMale ? users.filter( user => user.sex === 'male') : users
    const filter = (users, search) => {
        if (search.length === 0) {
            return users
        }
        const searchTerm = search.toLowerCase()
        const visible = users.filter( user =>
            user.name.toLowerCase().indexOf(searchTerm) > -1 ||
            user.middlename.toLowerCase().indexOf(searchTerm) > -1 ||
            user.lastname.toLowerCase().indexOf(searchTerm) > -1 ||
            user.email.toLowerCase().indexOf(searchTerm) > -1
        )
        return visible
    }
    const filterUsers = filter(visibleUsers, search)

    const listUsers = filterUsers.map(user => {
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
                    <UsersBar>
                    <FormControlLabel
                        control={
                        <Checkbox
                        onChange={() => dispatch(showMale())}
                        name="male"
                        color="primary"
                        />
                        }
                        label="Show Only Male"
                    />
                    <Search
                        placeholder='Search user...'
                        value={search}
                        onChange={e =>  dispatch(searchUser(e.target.value))}
                    />
                    </UsersBar>
                    <Users>
                        {listUsers}
                    </Users>
                </> :
                <Header> There are no users yet </Header>
            }
        </>
    )
}
export default ListUsers