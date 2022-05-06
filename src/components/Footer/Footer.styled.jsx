import styled, { keyframes } from 'styled-components';
import {  AiTwotoneHeart } from 'react-icons/ai';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const BoxFooter = styled.div`
  background-color: ${props => props.themeColor ? "#dfd1d1" : "#353232"};
  border-top: solid 2px #885965ac;
  
`
export const ContainerFooter = styled.div`
@media only screen and (max-width: 480px)
{
    padding:25px 5px;
}
  margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
  background-color: "#aa6868";
 padding: 15px;

flex-direction: row;
justify-content: center;
`

const heartBeatAnimation = keyframes`  
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.25) translateX(5%) translateY(5%);
    box-shadow: 0px 0px 20px 0px #bd9797;
  }
  40% {
    transform: scale(1.5) translateX(5%) translateY(5%);
  }
`

export const Heart = styled(AiTwotoneHeart)`
@media only screen and (max-width: 480px)
{
    margin-right: 4px;
  margin-left: 4px;
}
margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  
  fill: #885965ac;
  animation: ${heartBeatAnimation} 1s infinite;
`

export const Img = styled.img`
    box-shadow: 0 2px 32px 1px #4d3d41;
    border: solid 2px black;
    object-fit: cover;
    width: 200px;
    border-radius: 50%;
    &:hover{
      transform: scale(1.1);
      cursor: pointer;
      box-shadow: 0 2px 32px 5px #4d3d41;
    border: solid 2px black;
    }
    
`
export const SociableLink = styled(AiFillGithub)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    margin-left: 30px;
    &:hover{
      transform: scale(1.3);
      cursor: pointer;
      fill: #bea2a2;
    }
`
export const SociableLinks = styled(AiFillLinkedin)`
    width: 30px;
    height: 30px;
    &:hover{
      transform: scale(1.3);
      cursor: pointer;
      fill: #bea2a2;
    }
`