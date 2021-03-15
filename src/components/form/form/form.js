import React from 'react'
import styled from 'styled-components'
import { FormButton } from '../../ui/buttons';
import { useSelector } from 'react-redux';
const FormContainer = styled.form`
    margin-top: 40px;
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
    border: ${props => props.error ? '1px solid red' :'1px solid #333333'};
    border-radius: 5px;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;
    color: ${props => props.error ? 'red' : 'black'};
    &:focus {
        border: ${props => props.error ? '1px solid red' :'1px solid #065bf9'};
    }
`

const FormSelect = styled.select`
    border: none;
    border: 1px solid #333333;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    margin-bottom: 20px;    
    cursor: pointer;
    
    &:focus {
        border: 1px solid #065bf9;
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

const Error = styled.div`
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
    
`

const Form = ({ user, setUser, onSubmit }) => {

    const error = useSelector(state => state.users.error)
    const changeUser = (e) => {
        const editUser = { ...user }
        editUser[e.target.name] = e.target.value
        setUser(editUser)
    }

    return (
            <FormContainer
                onSubmit={(e) => onSubmit(e)}
            >
                <Error>{error}</Error>
                <FormFlex>
                    <FormColumn>
                        <FormInput
                            placeholder='name'
                            name='name'
                            value={user.name}
                            onChange={(e) => changeUser(e)}
                            error={error}
                        />
                        <FormInput
                            placeholder='middlename'
                            name='middlename'
                            value={user.middlename}
                            onChange={(e) => changeUser(e)}
                        />
                        <FormInput
                            placeholder='lastname'
                            name='lastname'
                            value={user.lastname}
                            onChange={(e) => changeUser(e)}
                        />
                    </FormColumn>
                    <FormColumn>
                        <FormInput
                            placeholder='email'
                            name='email'
                            value={user.email}
                            onChange={(e) => changeUser(e)}
                            error={error}
                        />
                        <FormSelect
                            name='sex'
                            value={user.sex}
                            onChange={(e) => changeUser(e)}
                        >
                            <option value="male">Мale</option>
                            <option value="female">Female</option>
                        </FormSelect>
                    </FormColumn>
                </FormFlex>
                <FormButtonContainer>
                    <FormButton
                        variant='contained'
                        color="primary"
                        type='submit'
                    >
                        Save
                    </FormButton>
                </FormButtonContainer>
            </FormContainer>
    )
}
export default Form