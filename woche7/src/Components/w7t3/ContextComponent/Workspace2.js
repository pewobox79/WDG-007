import React, { useContext } from 'react';
import { ThemeContext } from './ContextExample';
import Workspace3 from './Workspace3';
export default function Workspace2() {

    const darkTheme = useContext(ThemeContext);

    const themeStyle = {

        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        height: "500px",
        width: "80%",
        border: "2px solid green",
        margin: "auto"

    }
    return (
        <div style={themeStyle}>

            <h1>workspace2</h1>
            <Workspace3 />
        </div>
    )
}