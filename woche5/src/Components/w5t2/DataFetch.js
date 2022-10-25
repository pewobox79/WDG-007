import React, { useEffect, useState } from 'react';
import Users from './Users'
export default function DataFetch() {

    const url = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
   
    
    
    function getData() {
    
            fetch(url) //anfragen von API um JSON zu erhalten
                .then(response => response.json()) //JSON format in JS Object umwandeln
                .then(data => setUsers(data)) //JS Object verarbeiten z.B. console.log
        
        }

    useEffect(() => {
    
        getData();
        
    }, [])

    console.log("users", users)

    
    return (
        <>
            <h1>data fetching</h1>
            <p>hallo inhalt von heute</p>
            <Users users={users} />
        </>
    )
}