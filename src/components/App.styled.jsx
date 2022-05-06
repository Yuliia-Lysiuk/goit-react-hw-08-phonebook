import styled from 'styled-components';

export const Container = styled.div`
@media only screen and (max-width: 480px)
{
  min-height: 450px;
  padding: 30px;
}
min-height: 450px;
  background-color: "#aa6868";
  margin: 0 auto;
padding: 25px; 
display: flex;
flex-direction: column;
align-items: center;
`


export const Box = styled.div`
min-height: 80vh;
background-color: ${props => props.themeColor ? "#e2d7d7" : "#2e2a2a"};
`


