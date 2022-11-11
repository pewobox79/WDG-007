import React from 'react'
import Navigation from './Navigation'

function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <div>Footer</div>
        </>
    )
}

export default Layout