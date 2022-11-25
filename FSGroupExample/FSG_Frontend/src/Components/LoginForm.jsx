import React, {useState} from 'react'

export default function LoginForm(){

    
    function onSubmit (){
        alert("submit trigger")
    }
    
        
    return(
        <div>
            <h1>Login form</h1>
        <form>
            <input type="text" name="username" placeholder="username" required /><br/>
            <input type="password" name="password" placeholder="password" required /><br/>
            <button onClick={onSubmit} >Login</button>
        </form>
        </div>
    )
}