import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet, useLoaderData } from 'react-router-dom'
import { getPosts } from './Data';
import Layout from './Layout'

function User() {
    const posts = useLoaderData();

    const postList = posts.map((user)=>{
        console.log("selected user",user)

        return <div><Link to={`profile/${user.id}`}>{user.title}</Link></div>
    })
  return (
    <Layout>
        <h1>User</h1>
        {postList}
       <Outlet/>
    </Layout>
  )
}

export default User

export function loader(){
    
    return getPosts()
}