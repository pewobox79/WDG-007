import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles.css'

export default function MainNavigation() {

  const navColor = {
    color: "white"
  };
    return (
      <nav>
        <NavLink className="link"
        to="/"
        style={({ isActive }) => (isActive ? navColor : undefined)}
       end >
          Home
        </NavLink>
        <NavLink
          className="link"
          to="/students"
          style={({ isActive }) => (isActive ? navColor : undefined)}
        >
          Students
        </NavLink>
        <NavLink className="link" to="/">
          Student Results
        </NavLink>
        </nav>
    )
}