import React from 'react'

function Innerlayout({ children }) {

    const innerStyle = {
        background: "red",
        height: "50vh",
        width: "100%",
        zIndex: "2000"
    }

    return (
        <div style={innerStyle}>
            <h1>Blockartkellayer</h1>
            {children}
        </div>
    )
}

export default Innerlayout