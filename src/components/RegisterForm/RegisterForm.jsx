import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import {  Form, Links, Title, TitleForm, TitleLink , ButtonSubmit} from './RegisterForm.styled';
import { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperation';

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    
    function validateForm({ name, password }) {
        if (name.length < 2) {
          setNameError('Name too short');
            return false;  
        }
        if (password.length < 7) {
            setPasswordError('Password too short');
            return false;
        }
        return true;
    }

    const dispatch = useDispatch()
    function handleChange(e) {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                setNameError('');    
                break;
            case 'password':
                setPassword(value);
                setPasswordError('');    
                break;
            case 'email':
                setEmail(value); 
                break;
        
            default:
                break;
        }
    }

function handleSubmit(e) {
    e.preventDefault();
    const newUser = { name, email, password };
    const validation = validateForm(newUser);
    if (!validation) return
    dispatch(register(newUser));
    reset();
    }
    
     const reset = () => {
      setName('')
         setEmail('')
         setPassword('')
    }

    const onDisabled = (name === '') || (password === '') || (email === '');
    const themes = useSelector(state=> state.theme.value)

    return (<>
        <Title themeColor={themes}>
            Create your Phonebook account. It’s free and only takes a minute.
        </Title>
        
        <Form onSubmit={handleSubmit}>
            <TitleForm>Registration</TitleForm>
            <TextField id="outlined-basic" label="Name" type="text"
            color="secondary"
            style={{ marginBottom: '15px'  }}
              value={name}
              onChange={handleChange}
              name="name"
              helperText={nameError}
              required/>
            <TextField id="outlined-basic" label="Email" type="email"
            color="secondary"
            style={{ marginBottom: '15px'  }}
              value={email}
              onChange={handleChange}
              name="email"/>
            <TextField id="outlined-basic" label="Password"  type="password"
            color="secondary"
            style={{ marginBottom: '15px'  }}
              value={password}
              onChange={handleChange}
              name="password"
              helperText={passwordError}
              required/>
            <ButtonSubmit style={{ backgroundColor: '#d8bdc4ac', }} variant="contained" type="submit" disabled={onDisabled}>Create account</ButtonSubmit>
        </Form>
        <TitleLink themeColor={themes}>
            Already have an account? <Links to="/login">Log in</Links>
            </TitleLink>
    </>)
}