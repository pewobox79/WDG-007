import React from 'react'
import {Link} from 'react-router-dom';

function Navigation() {


  return (
    <nav style={{display: "flex", width: "100%", minHeight: "80px", justifyContent: "space-around"}}>
        <Link to="/">Homepage</Link>
        <Link to="blogarticlelist">Bloglist</Link>
        <Link to="defer" >Defer</Link>
    </nav>
  )
}

export default Navigation