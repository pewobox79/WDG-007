import React, { Suspense } from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom'
import { getSlowPosts } from './Data'
import ErrorMessage from './ErrorMessage';

function DefferedBlogPosts() {

    const loaderData = useLoaderData();
    console.log(loaderData)
    return (
        <>
            <div>DefferedBlogPosts</div>
            <Suspense fallback={<p>loading data...</p>}>
                {/** await component provided by react-router-dom which will wait till the*/}
                <Await resolve={loaderData.posts} errorElement={<ErrorMessage />}>
                    {(loaderposts) => <p>{JSON.stringify(loaderposts)}</p>}
                </Await>
            </Suspense>
        </>
    )
}

export default DefferedBlogPosts


export async function loader() {
    return defer({ posts: await getSlowPosts() })
}