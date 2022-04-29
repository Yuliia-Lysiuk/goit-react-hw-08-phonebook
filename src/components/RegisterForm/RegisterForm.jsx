import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import { ButtonSubmit } from './RegisterForm.styled';
import { useState } from 'react';

export function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const { name, value } = e.currentTarget;
        console.log(name, value);
        switch (name) {
            case 'name':
            setName(value)    
                break;
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
    const newUser = { name, email, password }
    console.log(newUser);
    reset();
    }
    
     const reset = () => {
      setName('')
         setEmail('')
         setPassword('')
    }

    const onDisabled = (name === '' ) || (password === '') || (email === '')

    return (<>
         
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Name" type="text"
              value={name}
              onChange={handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required/>
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
            <ButtonSubmit variant="contained" type="submit" disabled={onDisabled}>Create</ButtonSubmit>
            </form>
          
    </>)
}