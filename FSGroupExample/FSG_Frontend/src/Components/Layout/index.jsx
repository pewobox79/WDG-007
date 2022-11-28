import React from 'react';
import { Outlet } from 'react-router-dom';

import MainNavigation from '../Navigation/MainNavigation';


export default function Layout({children}){

    return(
        <>
            <MainNavigation/>       
            <main>
                {children}
                <Outlet/>
            </main>
            
        </>
    )
}