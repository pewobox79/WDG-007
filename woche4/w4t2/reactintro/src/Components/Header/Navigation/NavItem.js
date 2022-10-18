import {React, useState} from 'react';

export default function NavItem({name, title, href, background, target, color}){

    const [toggle, setToggle] = useState(false);

    function handleColor(){
        setToggle(!toggle)
    }
    

    const myColor = toggle ? "red": background;

    return(
        <li onClick={handleColor} style={{backgroundColor: myColor, margin: "10px"}}>
            <a href={href} target={target} title={title}><span style={{color: color}}>{name}</span></a>
        </li>
    )
}