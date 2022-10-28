import React, { useState, useEffect } from 'react';

export default function NewPost() {
    //hier wird der wert des formulars gespeichert um dann weiterverarbeitet zu werden.
    const [newPost, setNewPost] = useState({
        id: Math.floor(Math.random() * 100), //der Wert ist per post unterschiedlich...
        title: "",
        body: "",
        userId: 1 //würde sich anhand des logins orientieren...
    });

    


    function handleChange(event){
        setNewPost(prevValue => ({
            ...prevValue,[event.target.name]:event.target.value
        }))
    }

    console.log(newPost)

    function postArticle(e){
        e.preventDefault();
        
        const options ={
            method: "POST",
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify(newPost)

        }
        
        fetch("https://jsonplaceholder.typicode.com/posts", options)

    }

    return (
        <div className="App">
            <div className="Instructions">
                <div className="block">
                    {/*eingabefeld für den neuen Artikel*/}
                    <form style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px", flexDirection: "column" }}>
                        <input type="text" name="title" placeholder="title" onChange={handleChange} />
                        <input type="text" name="body" placeholder="body" onChange={handleChange} />
                        <button onClick={postArticle}>Add new article</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

