import styled from 'styled-components'
import girl from '../../img/Girl.jpg'

export const Box = styled.div`
@media only screen and (max-width: 1000px)
{
  min-width: 120px;
}
    background-image: url(${girl});
    min-width: 1000px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const Title = styled.h1`
@media only screen and (max-width: 480px)
{
   padding: 115px 5px 0;
    font-size: 14px;
}
   text-align: center;
   font-size: 26px;
   margin: 0 auto;
   text-shadow: #f3c4c4 2px 0 2px;
   max-width: 800px;
   padding:350px 0px 0 20px;
   
`

export const Logo = styled.p`
   @media only screen and (max-width: 480px)
{
  font-size: 20px;
}
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
@media only screen and (max-width: 480px)
{
 height: 10px;
   width: 10px;
}
   height: 30px;
   width: 30px;
 
`
export const Circle = styled.div`
@media only screen and (max-width: 480px)
{
 height: 20px;
   width: 20px;
}
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