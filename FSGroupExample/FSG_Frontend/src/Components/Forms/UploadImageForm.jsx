import React from 'react';

export default function UploadImageForm(){


    function handleUpload(e){
e.preventDefault()
console.log(e.target)
    }


    return(

        <div><h1>upload Image</h1>
        
        <form action="http://localhost:4430/api/images" method="POST" encType={"multipart/form"} >
            <input type="file" name="image"/>
            <button type='submit'>upload</button>
        </form>
        </div>


    )
}