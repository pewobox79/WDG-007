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
    //initialsiert unseren trigger um isLoading zu starten
        setIsLoading(true)

        const response = await fetch(`https://api.plos.org/search?q=title:${searchValue}`)
        //umwandeln der gefetchten daten in ein lesbares JS Objekt
        const data = await response.json();
        //die DATA wird in dem state von result gespeichert - für weiterverarbeitung
        setResult(data)
        //nach dem fetch muss dann der loading status wieder auf false
        setIsLoading(false)
    }

    useEffect(() => {
        getData();
    }, [searchValue])

//wenn isLoading TRUE ist, dann läuft der CircularProgress
    if (isLoading) {
        return (
            <CircularProgress/>
        )

    }

    //wenn daten angekommen sind, dann wird die componente gerendert
    return (
        <div>
           
            <h1>Fetch data with search feature</h1>
             {/*setSerachValue wird an das searchfeture weitergeben als prop */}
            <SearchFeature setSearchValue={setSearchValue}/>
            {/* die erfolgreich gefetchten daten werden als props weitergeben */}
            <ArticleList result={result.response} />
            
        </div>
    )

}