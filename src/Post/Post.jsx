import React from 'react';

export default function Post ({ post }) {
    return (
        <React.Fragment>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
        </React.Fragment>
    )
}