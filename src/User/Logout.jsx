import React, { useContext } from 'react';
import { StateContext } from '../Context/StateContext';

export default function Logout () {
    const { state, dispatch } = useContext(StateContext);
    const { user } = state;

    return (
        <form onSubmit={e => { 
            e.preventDefault();
            dispatch({type: 'LOGOUT', payload: {
                name: '',
                password: ''
            }})
        }}>
            Logged in as: {user.name}
            <input type='submit' value={'logout'} />
        </form>
    )
}