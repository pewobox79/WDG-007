import React, { useEffect, useState } from 'react';
import { client } from './client';
import { marked } from 'marked';

export default function ContentfulMain() {

    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        client.getEntries({ content_type: "blogPosts" })
            .then((response) => {
                setBlogPosts(response.items)
                setIsLoading(false)
            }
            )
            .catch((err) => console.log(err))

    }, [])

    console.log(blogPosts)

    if (isLoading) {
        return <div>loading...</div>
    }


    const listOfPosts = blogPosts.map((post) => {
        //body kommt als markup und muss umgewandelt werden in html mit hilfe von dem modul MARKED.
        const markedBody = marked(post.fields.body)

        //extrahieren des feldes Author
        const fields = post.fields
        let author;

            //überprüfen, ob der author überhaupt hinterlegt ist ...
        if(fields.artikelAuthor){
         author = fields.artikelAuthor
        }
        
    
    
        return (
            <div>
                <h2>{post.fields.title}</h2>
                <h3>author {author ? author.fields.name: "kein Author bekannt"}</h3>
                {/**marked body kann dann durch das attribut DangerouslySetInnerHTML als html ausgegeben werden */}
                <p dangerouslySetInnerHTML={{ __html: markedBody }}></p>
            </div>
        )
    })

    return (
        <div>
            <h1>contentfull main</h1>
            {listOfPosts}
        </div>
    )


}