import React from 'react';
import { Link } from 'react-router-dom';

export default function MainNavigation(){

    return(
        <nav style={{display: "flex", justifyContent: "space-between"}}>
            <Link to="/">Homepage</Link>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/upload-image">Upload Image</Link>
           
        </nav>
    )
}