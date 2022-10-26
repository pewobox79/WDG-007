import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';    
import SearchFeature from './SearchFeature';

import CircularProgress from '@mui/material/CircularProgress';

export default function DataSearch() {

    const [result, setResult] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("DNA")

    console.log("mein searchvalue ist ", searchValue)

    /* function getData(){
        fetch(URL)
        .then(response => response.json())
        .then(data => setResult(data))
    } */

    async function getData() {
        setIsLoading(true)
        const response = await fetch(`https://api.plos.org/search?q=title:${searchValue}`)
        const data = await response.json();
        setResult(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getData();
    }, [searchValue])


    if (isLoading) {
        return (
            <CircularProgress/>
        )

    }


    return (
        <div>
           
            <h1>Fetch data with search feature</h1>
            <SearchFeature setSearchValue={setSearchValue}/>
            <ArticleList result={result.response} />
            
        </div>
    )

}