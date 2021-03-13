import React from 'react'
import styled from 'styled-components'
// import { EditUserButton, FormButton } from '../../ui/buttons';
// import { changeActivateUser } from '../../../redux/actions/actions';
import Button from '@material-ui/core/Button';
import { changeActivateUser } from '../../../redux/actions/actions';
import { EditUserButton, FormButton } from '../../ui/buttons';
const FormContainer = styled.form`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`

const FormColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
`

const FormInput = styled.input`
    border: none;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;
    
    &:focus {
        border: 1px solid #065bf9;
    }
    &:disabled {
        cursor: not-allowed;
    }
`

const FormFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
`

const FormButtonContainer = styled.div`
    text-align: center;
`

const Form = ({ user, setUser, onSubmit, activateUser, dispatch }) => {

    const changeUser = (e) => {
        const editUser = { ...user }

        editUser[e.target.name] = e.target.value
        setUser(editUser)
    }

    return (
            <FormContainer
                onSubmit={(e) => onSubmit(e)}
            >
                <FormFlex>
                    <FormColumn>
                        <FormInput
                            placeholder='name'
                            name='name'
                            value={user.name}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='middlename'
                            name='middlename'
                            value={user.middlename}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <FormInput
                            placeholder='lastname'
                            name='lastname'
                            value={user.lastname}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                    </FormColumn>
                    <FormColumn>
                        <FormInput
                            placeholder='email'
                            name='email'
                            value={user.email}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        />
                        <select
                            placeholder='sex'
                            name='sex'
                            value={user.sex}
                            onChange={(e) => changeUser(e)}
                            disabled={activateUser}
                        >
                            <option value="male">М</option>
                            <option value="female">Ж</option>
                        </select>
                    </FormColumn>
                </FormFlex>
                <FormButtonContainer>
                    {/*<Button*/}
                    {/*    variant='contained'*/}
                    {/*    color="primary"*/}
                    {/*    type='submit'*/}
                    {/*    activateUser={activateUser}*/}
                    {/*>*/}
                    {/*    Save*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*    type='button'*/}
                    {/*    activateUser={activateUser}*/}
                    {/*    onClick={() => dispatch(changeActivateUser(true))}*/}
                    {/*>*/}
                    {/*    Edit User*/}
                    {/*</Button>*/}
                    <FormButton
                        variant='contained'
                        color="primary"
                        type='submit'
                        activateUser={activateUser}
                    >
                        Save
                    </FormButton>

                </FormButtonContainer>
            </FormContainer>
    )
}
export default Form