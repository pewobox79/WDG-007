import React from 'react'
import Navigation from './Navigation'

export default function Layout({children}){

    return(
        <div style={{width: "50vw"}}>
            <Navigation/>
            <main>{children}</main>
        </div>
    )
}