import React, {useState} from 'react'
import { registerRequest } from '../controller/requestController';
import Layout from './Layout';

export default function RegisterForm(){
        const userSchema ={
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    }

//platz für die user daten 
    const [newUser, setNewUser] = useState(userSchema);


//kümmert sich um die eingaben in <input/> feldern
    function handleChange(event){
        //aktualisiere den alten user input mit den neuen daten aus dem formular
        setNewUser(prev=> ({...prev, [event.target.name]: event.target.value}))
        
    }

//daten weg schicken
    function onSubmit (e){
        e.preventDefault();
        registerRequest(newUser)
        console.log(newUser)
        
    }
    
        
    return(
        <Layout>
            <h1>Register new user</h1>
        <form>
            <input type="text" name="firstname" placeholder="firstname" required onChange={handleChange}/><br/>
            <input type="text" name="lastname" placeholder="lastname" required onChange={handleChange}/><br/>
            <input type="text" name="username" placeholder="username" required onChange={handleChange}/><br/>
            <input type="password" name="password" placeholder="password" required onChange={handleChange}/><br/>
            <button onClick={onSubmit} >Register</button>
        </form>
        </Layout>
    )
}