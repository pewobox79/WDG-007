import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GoBack({title}){
    //initialisiert die useNavigate funktion, es speichert die history der user navigtions klicks
    const navigate = useNavigate();

    function handleClick(){
        //kann ein absoluter pfad sein "/pfad" oder aus der History (zahl sind die schritte zurück).
        // -1 ist ein schritt zurück, -2 sind zwei schritte usw
        navigate(-1);
    }

    return(
       <button onClick={handleClick}>{title}</button> 
    )
}