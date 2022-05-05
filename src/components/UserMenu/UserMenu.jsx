import { useDispatch, useSelector } from "react-redux";
import { getEmail, getName } from "redux/auth/authSelector";
import { ButtonOut, Letter, Menu, WelcomeBox } from "./UserMenu.styled";
import { RiLogoutBoxFill } from 'react-icons/ri';
import { logOut } from 'redux/auth/authOperation';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const style = {

    backgroundColor: '#e2d5d5', 
    minWidth: '20px',
    minHeight:'20px',
    p:'5px',
    borderRadius: '50%', 
    border:'solid 1px #e0bbc4ad',
    boxShadow: '2px 1px 2px 2px #e0bbc4ad',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    marginRight: '5px', 
};


export function UserMenu() {
    const name = useSelector(getName);
    const email = useSelector(getEmail);
    
    const dispatch = useDispatch();

const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Menu>
                
                <Button aria-describedby={id} variant="contained" onClick={handleClick} color="secondary" sx={style}>
                    <Letter>{name[0].toUpperCase()}</Letter>
                </Button>
                
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}>
                    <Typography sx={{ p: 1, backgroundColor: '#e2d5d5', }}>{email}</Typography>
                </Popover>
                <WelcomeBox>
                    <p>Welcome {name}!</p>
                    </WelcomeBox>
                <ButtonOut type="button" onClick={() => { dispatch(logOut()) }}><RiLogoutBoxFill/>Log out</ButtonOut>
            </Menu>
        </>
   ) 
}