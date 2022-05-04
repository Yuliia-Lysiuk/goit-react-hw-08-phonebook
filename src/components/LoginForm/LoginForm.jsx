import TextField from '@mui/material/TextField';
import { ButtonSubmit, Form, Links, Title } from './LoginForm.styled';
import { useState } from 'react';
import { TitleLink } from 'components/RegisterForm/RegisterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    const dispatch = useDispatch();
    const themes = useSelector(state => state.theme.value);

    function validateForm({ password }) {
        if (password.length < 7) {
            setPasswordError('Password too short');
            return false;
        }
        return true;
    }

    function handleChange(e) {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'password':
                setPassword(value)
            setPasswordError('')    
                break;
            case 'email':
            setEmail(value) 
                break;
        
            default:
                break;
        }
    }

function handleSubmit(e) {
    e.preventDefault();
    const oldUser = { email, password };
    const validation = validateForm(oldUser);
    if (!validation) return   
    dispatch(logIn(oldUser));
    reset();
    }
    
     const reset = () => {
     
         setEmail('')
         setPassword('')
    }

    const onDisabled = (password === '') || (email === '')

    return (<>
        
        <Form onSubmit={handleSubmit}>
           <Title>Log in</Title> 
            <TextField id="outlined-basic" label="Email *" type="email" color="secondary"
                style={{ marginBottom: '15px'  }}
              value={email}
                onChange={handleChange}
              name="email"/>
            <TextField id="outlined-basic" label="Password" type="password" color="secondary"
                style={{ marginBottom: '15px'  }}
              value={password}
              onChange={handleChange}
              name="password"
                 helperText={passwordError}
                required />
            
            <ButtonSubmit style={{ backgroundColor: '#d8bdc4ac', }} variant="contained" type="submit" disabled={onDisabled}>Log in</ButtonSubmit>
            </Form>
            
        <TitleLink themeColor={themes}>Don’t have an account? <Links to="/register">Sign up</Links></TitleLink>
    </>)
}