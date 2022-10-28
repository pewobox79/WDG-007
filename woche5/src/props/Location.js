import React from 'react';

export default function Location({standort}){
    
    return(
        <div style={{border: "1px solid black", margin: "10px"}}>
        <p >{standort.street}</p>
        <p>{standort.city}</p>
        </div>
    )
}