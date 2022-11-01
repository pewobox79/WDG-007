import React from 'react';
import Author from '../../Handler/ContentfulHandler';
import initData from '../../initdata.json'


export default function Contentful(){

    const initAuthor = new Author(initData)
   
    const name = initAuthor.getAuthorNameList()

    console.log(name)
    return(
        <div>
            {name}
            </div>
    )
}