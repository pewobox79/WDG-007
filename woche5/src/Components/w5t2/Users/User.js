import React from 'react';
export default function User({username, email, address}) {

    const myEmail = `mailto:${email}?subject=hallo`
    const myEmailTitle = `schreibe email an ${email}`


    return (
        <div>
            <h3>{username}</h3>
            <p>address</p>
            <a href={myEmail} title={myEmailTitle}>{email}</a>
        </div>
    )
}