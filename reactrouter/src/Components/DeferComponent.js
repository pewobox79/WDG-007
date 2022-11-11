import React, {Suspense} from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom'
import { getSlowPosts } from '../Utils/api'

function DeferComponent() {

    const slowPosts = useLoaderData()


    return (
        <div>
            <h1>DeferComponent Page</h1>
            <Suspense fallback={<h2>Loading data...</h2>}>
                <Await resolve={slowPosts.posts}>
                    {(posts) => <p>{JSON.stringify(posts)}</p>}
                </Await>
            </Suspense>

        </div>
    )
}

export default DeferComponent

export function loader() {
    return defer({ posts: getSlowPosts() })
}