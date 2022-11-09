import React from 'react'

import Workspace2 from './Workspace2';
export default function Workspace() {
    
    const themeStyle = {

        backgroundColor:  "white",
        color:  "black",
        height: "600px",
        width: "80%",
        border: "1px solid green",
        margin: "auto"

    }
   


    return (

        <div style={themeStyle}>
            <h1>Workspace 1</h1>
            <Workspace2 />
        </div>




    )
}