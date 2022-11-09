import React from 'react'

function OuterLayout({children}) {

    const outerStyle={
        background: "green",
        height: "100vh",
        width: "100%"
    }
  return (
    <div style={outerStyle}>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
    </div>
  )
}

export default OuterLayout