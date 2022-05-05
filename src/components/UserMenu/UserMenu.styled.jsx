import styled from 'styled-components';

export const Menu = styled.div`
  font-size:20px;
  color: #c4aaaa;
  display:flex;  
`

export const ButtonOut = styled.button`
    background-color:#856c6c;
    font-size:16px;
    padding:5px;
    border-radius: 10px; 
    box-shadow: 2px 2px 10px 1px #857579ae;
    cursor: pointer;
    margin-left: 10px;
    display:flex;
    align-items:center;
     :hover{
        color: #470c3aaf;
        box-shadow: 0px 0px 2px 2px #470c3aaf;
        transform: scale(1.1);
        background-color:#8d7777;
        border:2px solid black;
    }
`
export const Letter = styled.p`
@media only screen and (max-width: 480px)
{
  font-size: 18px;
    font-weight: 700;
    width: 10px;
    height:10px;
}
    font-size: 24px;
    font-weight: 700;
    width: 20px;
    height:20px;
    color: #8f7070;
    
    display: flex;
    align-items:center;
    justify-content: center;
    
`
export const WelcomeBox = styled.div`
    @media only screen and (max-width: 480px)
{
  display: none;
}
   display: block; 
`