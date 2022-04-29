import { Outlet } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai';
import { RiLoginBoxFill } from 'react-icons/ri';
import { GoSignIn } from 'react-icons/go';
import { ImAddressBook } from 'react-icons/im';
import { MainNav, NavItem, NavList, NavLinks, NavTitle } from "./Navigation.styled";


export function Navigation() {
    return (<>
        <header>
            <MainNav>
                < NavList>
                    <NavItem>
                        <NavLinks to="/">
                            <AiTwotoneHome />
                            <NavTitle>Home</NavTitle>
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contacts">
                            <ImAddressBook />
                            <NavTitle>Contacts</NavTitle>
                        </NavLinks>
                    </NavItem>
                </ NavList>
                <NavList>
                    <NavItem>
                        <NavLinks to="/register">
                            <RiLoginBoxFill />
                            <NavTitle>Log In</NavTitle>
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/login">
                            <GoSignIn />
                            <NavTitle>Sig Up</NavTitle>
                        </NavLinks>
                    </NavItem>

                </NavList>
            </MainNav>
        </header>
        <main>
            <Outlet/>
        </main>
        
    </>)
}