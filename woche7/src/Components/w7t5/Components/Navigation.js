import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav style={{display: "flex", width: "100%", minHeight: "80px", justifyContent: "space-around"}}>

        <Link to="/">Home</Link>
        <Link to="/user">Userprofile</Link>
        <Link to="account">Account</Link>
        <Link to="defer">Defferdposts</Link>
    </nav>
  )
}

export default Navigation