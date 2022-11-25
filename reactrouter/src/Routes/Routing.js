import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Homepage from '../Components/Homepage';
import BlogPosts, { loader as blogPosts } from '../Components/BlogPosts';
import BlogArticle, { loader as singleArticle } from '../Components/BlogArticle';
import ErrorPage from '../Components/ErrorPage';
import DeferComponent, {loader as slowPosts} from '../Components/DeferComponent';
import {getToken} from '../expressExample/expressFetch';

async function getAccessToken(){
    const response = await fetch("http://localhost:3500/?token=12345token");
    const json = await response.json();
    console.log("accesstoken von react",json)
}

getAccessToken()



function Routing() {

    const router = createBrowserRouter(createRoutesFromElements(

        <Route>
            <Route index path="/" element={<Homepage />} />
            <Route path="blogarticlelist" element={<BlogPosts />} errorElement={<h1>hier ist was nicht richtig</h1>} loader={blogPosts} />
            <Route path="article/:id" element={<BlogArticle />} loader={singleArticle} />
            <Route path="defer" element={<DeferComponent />} loader={slowPosts} />
            <Route path="*" element={<ErrorPage />} />
        </Route>


    ))


    return <RouterProvider router={router} />
}

export default Routing