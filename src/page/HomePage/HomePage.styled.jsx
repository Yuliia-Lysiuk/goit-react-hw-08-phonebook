import styled from 'styled-components'
import girl from '../../img/Girl.jpg'

export const Box = styled.div`
    background-image: url(${girl});
    min-height: 470px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const Title = styled.h1`
   text-align: center;
   font-size: 26px;
   margin: 0;
   text-shadow: #f3c4c4 2px 0 2px;
   max-width: 800px;
   padding: 300px 50px 0 50px;
   
`

export const Logo = styled.p`
   
   font-size: 36px;
   color: #be7756;
   text-shadow: #645e5e 4px 1px 2px, #161616 6px 3px 2px ;
   
`
export const LogoBox = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   
   
`

export const LogoImg = styled.img`
   height: 30px;
   width: 30px;
 
`
export const Circle = styled.div`
   height: 40px;
   width: 40px;
   background-color:#be7756;
   box-shadow: 3px 0px 1px 1px #504b49, 6px 3px 2px 2px #161616;
   margin-right: 10px;
   background-color: #be7756;
     display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
`