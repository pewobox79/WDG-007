import React from 'react';
export default function User({username, email, address}) {

    const myEmail = `mailto:${email}?subject=hallo`
    const myEmailTitle = `schreibe email an ${email}`

    console.log(address)

    return (
        <div>
            <h3>{username}</h3>
            <p>{address.city} , {address.street}</p>
            <a href={myEmail} title={myEmailTitle}>{email}</a>
        </div>
    )
}