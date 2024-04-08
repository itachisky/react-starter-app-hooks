import React, { useContext } from 'react';
import Logout from './Logout';
import Register from './Register';
import { StateContext } from '../Context/StateContext';

export default function UserBar () {
    const { state } = useContext(StateContext);
    const { user } = state;

    if (user.name) {
        return <Logout user={user} />
    } else {
        return (
            <React.Fragment>
                <Register />
            </React.Fragment>
        )
    }
}