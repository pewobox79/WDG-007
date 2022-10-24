import React, {useEffect} from 'react';

export default function UseEffect(){

    useEffect(()=>{

        console.log("i did an effect")
    })
    return(
        <h1>handle useEffect</h1>
    )
}