import styled from 'styled-components';
import { AiTwotoneHome } from 'react-icons/ai';

export const MainNav = styled.nav`
  display:flex;
  justify-content: space-between;
  background-color: #961a1a;
  padding: 15px 40px;
  border-bottom: solid 2px blue;
  box-shadow: 1px 5px 15px 5px #000000;
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