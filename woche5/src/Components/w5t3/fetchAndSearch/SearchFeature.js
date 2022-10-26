import React, {useState} from 'react';

export default function SearchFeature({ setSearchValue }) {

    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(event){
       setSearchTerm(event.target.value)

    }

    

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