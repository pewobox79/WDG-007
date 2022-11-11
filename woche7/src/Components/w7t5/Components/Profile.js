import React from 'react'
import {useLoaderData} from 'react-router-dom'
import { getPost } from './Data'

function Profile() {

    const postData = useLoaderData();
    console.log(postData)


  return (
    <h1>Profile {JSON.stringify(postData)}</h1>
  )
}

export default Profile

export function loader({params}){
    const postId = params.id
   return getPost(postId)
    
}