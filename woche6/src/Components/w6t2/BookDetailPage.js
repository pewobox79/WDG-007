import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetailPage(){

    const myParams = useParams();
    console.log(myParams)
    return(
        <h1>Details of Book {myParams.bookID}</h1>
    )
}