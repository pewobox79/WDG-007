import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getArticle } from '../Utils/api'

function BlogArticle() {

  const articleData = useLoaderData()
  console.log(articleData)
  return (
    <>
    <h1>{articleData.title}</h1>
    <p>{articleData.body}</p>
    </>
  )
}

export default BlogArticle

export function loader({ params }) {
  const postId = params.id

  return getArticle(postId)

}