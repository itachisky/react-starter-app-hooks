import React, { useContext } from 'react';
import Post from './Post';
import { StateContext } from '../Context/StateContext';

export default function List () {
    const { state } = useContext(StateContext);
    const { posts = [] } = state;
    return (
        <React.Fragment>
            {
                posts.map((post) => {
                    return (
                        <React.Fragment>
                            <Post post={post} />  
                            <hr />             
                        </React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
} 