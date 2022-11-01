import React from 'react';
import { booksList } from './booksData';

export default function Books(){

    const list = booksList.map((book)=>{
        return <h1>{book.title}</h1>
    })

    return(
        <>
        <h1>List of all books</h1>
        {list}
        </>
    )
}