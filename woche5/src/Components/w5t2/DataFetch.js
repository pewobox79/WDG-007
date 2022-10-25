import React, { useEffect, useState } from 'react';
import Users from './Users';
import LoadingInfo from './Assets/LoadingInfo';

export default function DataFetch() {

    const url = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    
    
    function getData() {
        setIsLoading(true)
        setTimeout(()=>{
            fetch(url) //anfragen von API um JSON zu erhalten
                .then(response => response.json()) //JSON format in JS Object umwandeln
                .then(data => setUsers(data)) //JS Object verarbeiten z.B. console.log
            setIsLoading(false)
        },3000)
            
        }

    useEffect(() => {
    
        getData();
        
    }, [])

    if(isLoading){
        return <LoadingInfo title="user"/>
    }
    
    return (
        <>
            <h1>data fetching</h1>
            <p>hallo inhalt von heute</p>
            <Users users={users} />
        </>
    )
}