import React from 'react'
import { useLoaderData } from 'react-router-dom'
import OuterLayout from '../Layouts/OuterLayout'
import Author from './Author'


export default function Artikel() {

  const myData = useLoaderData()
  console.log(myData)
  return (
    <OuterLayout>
        <Author/>
       
        <div>Artikel</div>
        <a href="/article/title/2452345245252253">zum artikel</a>
    </OuterLayout>
    
  )
}

 export function loader(){
  return "hallo from loader"
 }