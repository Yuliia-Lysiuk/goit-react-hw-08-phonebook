import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`
export const Label = styled.label`
    font-size: 18px;
`

export const Input = styled.input`
    padding: 5px;
    margin-left: 31px;
    margin-bottom: 15px;
    border-radius: 10px;
    width: 45%;
    :hover{
        
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;

    }
`

export const NameInput = styled.input`
    padding: 5px;
    margin-left: 12px;
    margin-bottom: 15px;
    border-radius: 10px;
    width: 45%;
    :hover{
        
        border: 2px solid black;
        box-shadow: 1px 1px 4px 1px #470c3aaf;
    }
`

export const Button = styled.button`
    display: flex;
    border-radius: 10px;   
    font-size: 18px;
    background-color:#665050;
    box-shadow: 0px 0px 2px 2px #333333ae;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    padding: 5px; 
    
    
    :hover{
        color: #470c3aaf;
        box-shadow: 0px 0px 2px 2px #470c3aaf;
        cursor: pointer;
        transform: scale(1.1);
        background-color:#8d7777;
        border:2px solid black;
    }
    
`
