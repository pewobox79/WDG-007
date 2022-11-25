import React, {useState} from 'react'
import Layout from '../Layout'
import { loginUserRequest } from '../../request/userRequests'

export default function LoginForm(){

    const newUserSchema = {
        username: "",
        password: "",
       
    }
    
    const [user, setUser]=useState(newUserSchema)
    
    function handleLoginForm (e){
    setUser(prev =>
        ({
        ...prev, [e.target.name]: e.target.value
    }))
    
    }
    console.log(user)
    
        function handleLogin(e){
            e.preventDefault()
            loginUserRequest(user)
        }
        
    return(
        <Layout>
            <h1>Login form</h1>
        <form>
            <input type="text" name="username" placeholder="username" required onChange={handleLoginForm}/><br/>
            <input type="password" name="password" placeholder="password" required onChange={handleLoginForm}/><br/>
            <button onClick={handleLogin}>Login</button>
        </form>
        </Layout>
    )
}