import React from 'react'
import OuterLayout from '../Layouts/OuterLayout'
import Author from './Author'

function Artikel() {
  return (
    <OuterLayout>
        <Author/>
        <div>Artikel</div>
        <a href="/article/title/2452345245252253">zum artikel</a>
    </OuterLayout>
    
  )
}

export default Artikel