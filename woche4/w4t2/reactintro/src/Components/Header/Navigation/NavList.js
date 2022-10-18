import React from 'react';
import NavItem from './NavItem';
import { navData } from '../../../data/navData';


export default function NavList() {

    const navItems = navData.map((item) => {
        return <NavItem 
            name={item.name} 
            href={item.link} 
            color={item.color} 
            background={item.background} 
            target={item.target} 
        />

    })



    return (
        <ul>
         {navItems}
        </ul>
    )
}