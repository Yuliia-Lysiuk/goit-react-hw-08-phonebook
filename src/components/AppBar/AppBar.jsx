import { Outlet } from "react-router-dom";
import { AiTwotoneHome} from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { ImAddressBook } from 'react-icons/im';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import { MainNav, NavItem, NavList, NavLinks, NavTitle, Header } from "./AppBar.styled";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from 'redux/store';
import {  ButtonTheme } from "page/ContactsPage/ContactsPage.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { getIsLoggedIn } from "redux/auth/authSelector";



export function AppBar() {
    const dispatch = useDispatch();
    const login = useSelector(getIsLoggedIn);
    const themes = useSelector(state => state.theme.value);

    return ( <>
        <Header>
            <MainNav>
                < NavList>
                    <NavItem>
                        <NavLinks to="/">
                            <AiTwotoneHome />
                            <NavTitle>Home</NavTitle>
                        </NavLinks>
                    </NavItem>
                    {login && <NavItem>
                        <NavLinks to="/contacts">
                            <ImAddressBook />
                            <NavTitle>Contacts</NavTitle>
                        </NavLinks>
                    </NavItem>}
                </ NavList>
                <ButtonTheme type="button" onClick={() => dispatch(changeTheme())}>
                    {themes ? <BsSunFill /> : <BsMoonStarsFill />}
                </ButtonTheme>
                {login ? <UserMenu />  : <NavList>
                    <NavItem>
                        <NavLinks to="/login">
                            <RiLoginBoxFill />
                            <NavTitle>Log In</NavTitle>
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/register">
                            <GoSignIn />
                            <NavTitle>Sig Up</NavTitle>
                        </NavLinks>
                    </NavItem>
                </NavList>
                   
                }
            </MainNav>
            
        </Header>
         <Outlet />
    </>)
}