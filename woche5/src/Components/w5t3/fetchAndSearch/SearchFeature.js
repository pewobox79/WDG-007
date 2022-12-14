import React, {useState} from 'react';

export default function SearchFeature({ setSearchValue }) {
    //der searchTerm speichert das Suchwort aus dem input feld
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
        //setzt den neuen wert für searchTerm
       setSearchTerm(event.target.value)

    }

    
    //run search läuft erst bei drücken des buttons...und speichert den wert aus dem searchTerm in den searchValue
    function runSearch(){
        setSearchValue(searchTerm)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "50px", width: "100%", backgroundColor: "gray" }}>
            <input onChange={handleChange} type="text" name="search" placeholder="Search..." />
            <button onClick={runSearch}>Search</button>
        </div>
    )
}