import logo from '../../img/logo.png'
import { Box, Logo, LogoImg, Title, LogoBox, Circle } from './HomePage.styled'

export default function HomePage() {
    return (<>
        <Box>
            
            <Title>WELCOME TO NEW GOOD QICKLY REACT APPLICATION </Title>
            <LogoBox>
            <Circle> <LogoImg src={logo} alt="" /></Circle>
                <Logo>PHONEBOOK</Logo>
            </LogoBox>        
            
        </Box>
    </>)
}