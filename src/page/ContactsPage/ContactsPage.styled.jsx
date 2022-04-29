import styled from 'styled-components'

export const Box = styled.div`
min-height: 100vh;
background-color: ${props => props.themeColor ? "#e2d7d7" : "#2e2a2a"};
padding: 20px;
`
export const Text = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
`

export const ButtonTheme = styled.button`
    background-color:#856c6c;
    padding:10px;
    /* border:none; */
    box-shadow: 2px 2px 10px 1px #857579ae;
    cursor: pointer;
`

export const Phonebook = styled.div`

margin: auto ;
    background-color: #856c6c;
    width: 30%;
    padding: 20px;
    border: 2px solid #e0d4d4;
    box-shadow: 8px 8px 20px 1px #857579ae;
    
`

export const Title = styled.h1`
   text-align: center;
   font-size: 36px;
   margin: 0;
   text-shadow: #f3c4c4 2px 0 2px;
   margin-bottom: 20px;  
`
export const SecondTitle = styled.h2`
   text-align: center;
   font-size: 26px;
   margin: 0;
   margin: 10px;  
`