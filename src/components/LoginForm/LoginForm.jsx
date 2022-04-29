import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { ButtonSubmit } from './LoginForm.styled';
import { useState } from 'react';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const { name, value } = e.currentTarget;
        console.log(name, value);
        switch (name) {
            case 'password':
            setPassword(value) 
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
    const oldUser = {  email, password }
    console.log(oldUser);
    reset();
    }
    
     const reset = () => {
     
         setEmail('')
         setPassword('')
    }

    const onDisabled = (password === '') || (email === '')

    return (<>
         
        <form onSubmit={handleSubmit}>
            
            <TextField id="outlined-basic" label="Email" type="email"
              value={email}
              onChange={handleChange}
              name="email"/>
            <TextField id="outlined-basic" label="Password"  type="password"
              value={password}
              onChange={handleChange}
              name="password"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Password may contain not only letters but numbers"
              required/>
            <ButtonSubmit variant="contained" type="submit" disabled={onDisabled}>Log in</ButtonSubmit>
            </form>
          
    </>)
}