import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const ButtonSubmit = styled(Button)`
  color: red;
  background-color: #856c6c;
  padding: 15px 40px;
  box-shadow: inset 0px -8px 10px 0px #bd9797;
  display: inline-block;
  &:hover{
    background-color: #e28787;
    transform: scale(1.1)
  }
`

export const Title = styled.h1`
   text-align: center;
   font-size: 24px;
   margin: 0;
   text-shadow: #f3c4c4 2px 0 2px;
   margin-bottom: 20px;  
`

export const Links = styled(Link)`
  
   text-decoration: underline;
   &:hover{
     color: #bb7a7a;
     transform: scale(2)
   }
`

export const Form = styled.form`

margin: 20px auto ;
    background-color: #856c6c;
    padding: 20px;
    border: 2px solid #e0d4d4;
    box-shadow: 8px 8px 20px 1px #857579ae;
    display: flex;
    flex-direction: column;
    border-radius:10px;
`