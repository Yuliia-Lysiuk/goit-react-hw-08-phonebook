import { NavLink, Outlet } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { ImAddressBook } from 'react-icons/im';
import { MainNav, NavItem, NavList } from "./Navigation.styled";


export function Navigation() {
    return (<>
        <header>
            <MainNav>
                < NavList>
                    <NavItem>
                        <NavLink to="/">
                            <AiTwotoneHome />
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/contacts">
                            <ImAddressBook/>
                            Contacts
                        </NavLink>
                    </NavItem>
                </ NavList>
                <NavList>
                    <NavItem>
                        <NavLink to="/register">
                            <RiLoginBoxFill />
                            Log In
                        </NavLink>
                   </NavItem>
                    <NavItem>
                        <NavLink to="/login">
                            <GoSignIn />
                            Sig Up
                        </NavLink>
                   </NavItem> 
            
                </NavList>
            </MainNav>
        </header>
        <Outlet/>
    </>)
}