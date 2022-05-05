import { ContainerFooter, BoxFooter, Heart, Img, SociableLink, SociableLinks, } from "./Footer.styled";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from "react-redux";
import { useState } from "react";
import me from '../../img/me.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#917373',
  border: '2px solid #000',
  boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'colum',
  justifyContent: 'center',
    alignItems: 'center',
};

const styleButton = {
    color: 'black',
    fontSize: '12px',
};

export function Footer() {
    const themes = useSelector(state => state.theme.value);

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (<>
        <footer>
            <BoxFooter themeColor={themes}>
               <ContainerFooter>
                    <p>© 2022 | Developed with <Heart /> </p>
                    <Button onClick={handleOpen} sx={styleButton}>by Julia Lusyk</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                Hello I am front and developer!
                                <div>
                                    <a href="https://github.com/Yuliia-Lysiuk"><SociableLink /></a> 
                                    <a href="https://www.linkedin.com/in/yuliia-lysuik-490748227/"><SociableLinks/></a> 
                                </div>
                                 
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              <Img src={me} alt="" />
                                
                                
                        </Typography>
                        </Box>
                    </Modal>
               </ContainerFooter>
           </BoxFooter>
        </footer>
    </>)
}