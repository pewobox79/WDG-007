import React, {useContext} from 'react';
import { ThemeContext } from './ContextExample';

export default function Workspace5(){

    const darkTheme = useContext(ThemeContext);
    const themeStyle = {

        backgroundColor:  darkTheme ? "grey": "yellow",
        color:  darkTheme ? "blue": "black",
        height: "300px",
        width: "100%",
        border: "2px solid red",
        zIndex: "10000"
        

    }
    
    return(
        <div style={themeStyle}>
            <h1>Workspace 5</h1>
        </div>
    )
}