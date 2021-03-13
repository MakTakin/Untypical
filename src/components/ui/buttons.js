import styled from 'styled-components'
import Button from '@material-ui/core/Button';

export const CloseButton = styled(Button)`
    border: none;
    outline: none;
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    background: #032c9e;
    color: #fff;
    cursor: pointer;

`

export const FormButton = styled(Button)`
    display: ${props => props.activateUser ? 'none' : 'inline-block'};
    padding: 10px 50px;
`

export const EditUserButton = styled(Button)`
    // display: ${props => props.activateUser ? 'inline-block' : 'none'};
    padding: 10px 50px;
`