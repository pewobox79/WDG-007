import React from 'react';
import User from './User';

export default function Users({ users }) {
    console.log(users)

    const userList = users.map((user) => {

        return <User
            key={user.id}
            username={user.username}
            email={user.email}
            address={user.address}
        />

    })

    return (
        <>
            {userList}
        </>
    )
}