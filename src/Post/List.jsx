import React from 'react';
import Post from './Post';

export default function List ({ posts = [] }) {
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