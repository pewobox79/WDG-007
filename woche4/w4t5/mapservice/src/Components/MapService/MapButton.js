import React from 'react';

export default function MapButton({location, title, setCenter, center}){

    function handleLocation(){
        setCenter(location);
        
        
    }


    return(
        <button onClick={handleLocation}>{title}</button>
    )
}