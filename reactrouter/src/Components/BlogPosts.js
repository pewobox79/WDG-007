import React from 'react'
import Navigation from './Navigation'
import { getPosts } from '../Utils/api'
import { useLoaderData } from 'react-router-dom'

function BlogPosts() {

  const posts = useLoaderData();

  const ListOfPosts = posts.map((post) => {
    return <div key={post.id}><h1><a href={`article/${post.id}`}>{post.title}</a></h1></div>
  })
  return (
    <>
      <Navigation />
      <div>BlogPosts</div>
      {ListOfPosts}
    </>
  )
}

export default BlogPosts

//diese loader function kümmert sich um das promise der daten...
export function loader() {
  return getPosts()
}