import React, { useContext, useState } from 'react';
import { StateContext } from '../Context/StateContext';

export default function Register () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { dispatch } = useContext(StateContext);

    const handleUsernameChange = (e) => {
        const { value } = e.target;
        setUsername(value)
    }

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value)
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({type: 'REGISTER', payload: {
                name: username,
                password
            }})
            }}>
            <label htmlFor='register-username'>Username:</label>
            <input type='text' name='username' value={username} onChange={handleUsernameChange} />
            <label htmlFor='register-password'>Password:</label>
            <input type='text' name='password' value={password} onChange={handlePasswordChange} />
            <input type='submit' value={"login"} disabled={username.length === 0 && password.length === 0}  />
        </form>
    )
}