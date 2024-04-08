import React, { useContext, useState } from 'react';
import { StateContext } from '../Context/StateContext';

export default function Create () {
    const { state, dispatch} = useContext(StateContext);
    const { user } = state;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => {
        const { value } = e.target;
        setTitle(value);
    }

    const handleContent = (e) => {
        const { value } = e.target;
        setContent(value)
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch({
                type: 'CREATE',
                payload: {
                    title,
                    content,
                    author: user.name
                }
            });
            setTitle('');
            setContent('');
            }}>
            <div>Author: <b>{user && user.name}</b></div>
            <div>
                <label htmlFor='title'>Title:</label>
                <input type='text' name='title' value={title} onChange={handleTitle} />
            </div>
            <textarea name='content' value={content} onChange={handleContent} />
            <input type='submit' value={'submit'} />
        </form>
    )
} 