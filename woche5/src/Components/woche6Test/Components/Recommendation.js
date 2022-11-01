import React from 'react';

export default function Recommendation(props){
console.log("props", props)
    return(
        <div>
            <h1>recommendation</h1>
            {JSON.stringify(props)}
        </div>
    )
}