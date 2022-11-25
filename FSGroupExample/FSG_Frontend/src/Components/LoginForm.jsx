import React, {useState} from 'react'
import { loginRequest } from '../controller/requestController';

export default function LoginForm(){
        const userSchema ={
        username: "",
        password: ""
    }

//platz für die user daten 
    const [user, setUser] = useState(userSchema);


//kümmert sich um die eingaben in <input/> feldern
    function handleChange(event){
        //aktualisiere den alten user input mit den neuen daten aus dem formular
        setUser(prev=> ({...prev, [event.target.name]: event.target.value}))
        
    }

//daten weg schicken
    function onSubmit (e){
        e.preventDefault();
        loginRequest(user)//handles POST request to server
        console.log(user)
        
    }
    
        
    return(
        <div>
            <h1>Login form</h1>
        <form>
            <input type="text" name="username" placeholder="username" required onChange={handleChange}/><br/>
            <input type="password" name="password" placeholder="password" required onChange={handleChange}/><br/>
            <button onClick={onSubmit} >Login</button>
        </form>
        </div>
    )
}