import React, { useEffect, useState } from 'react';
import {client} from './client'
import {marked} from 'marked'

export default function FetchContentful(){

const [fetched, setFetched] = useState();

useEffect(()=>{
    client.getEntries({content_type: "blogPosts"}).then(response => setFetched(response.items)).catch((err)=> console.log(err));

}, [])

const postsList = fetched?.map((post)=>{
    const markedBody = marked(post.fields.body)
    return(<div>
        <h1>{post.fields.title}</h1>
        <p dangerouslySetInnerHTML={{__html: markedBody}}></p>
    </div>)
})

console.log(fetched)
    return(
        <div>
            <h1>Contentful data fetch with client</h1>
            {postsList}
        </div>
    )
}        