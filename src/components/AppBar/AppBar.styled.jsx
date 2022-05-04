import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const MainNav = styled.nav`
  display:flex;
  justify-content: space-between;
  background-color: #856c6c;
  padding: 10px 40px;
  /* border-bottom: solid 2px #885965ac; */
  box-shadow: inset 0px -8px 10px 0px #bd9797;
`

export const NavList = styled.ul`
  font-size:20px;
  color: #c4aaaa;
  display:flex;  
`

export const NavItem = styled.li`

  &:not(:last-child) {
      margin-right:20px;
  }

`
export const NavLinks = styled(NavLink)`
 display:flex;
 align-items: center;
 &.active {
   color:#1b1a1a;
 }
`

export const NavTitle = styled.span`
 display: inline-block;
 margin-left: 3px;
 
`

