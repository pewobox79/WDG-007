import React, {useState} from 'react';
import Location from './Location';

export default function Person({name, title, job, location}){

   const [noLocation, setNoLocation] = useState(true)
    return(

        <div style={{border: "1px solid black", margin: "10px", backgroundColor: "yellow"}}>
            <h3>{name}</h3>
            <p>{title}</p>
            <p>{job}</p>
            
           {noLocation && <Location standort={location}/>}
        </div>

    )
}