import React, { useState } from 'react'
import Layout from '../Layout'
import { registerUserRequest } from '../../request/userRequests'

export default function Registration(){

    const date = new Date()

const newUserSchema = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    token: date.getTime()
}

const [newUser, setNewUser]=useState(newUserSchema)

function handleRegisterForm (e){
setNewUser(prev =>
    ({
    ...prev, [e.target.name]: e.target.value
}))

}
console.log(newUser)

    function handleRegistration(e){
        e.preventDefault()
        registerUserRequest(newUser)
    }
    

    return(
        <Layout>
            <h1>Registration Form</h1>
        <form>
            <input type="text" name="firstname" placeholder="firstname" required onChange={handleRegisterForm}/><br/>
            <input type="text" name="lastname" placeholder="lastname" required onChange={handleRegisterForm}/><br/>
            <input type="email" name="email" placeholder="email" required onChange={handleRegisterForm}/><br/>
            <input type="password" name="password" placeholder="password" required onChange={handleRegisterForm}/><br/>
            <button onClick={handleRegistration}>Register</button>
        </form>
        </Layout>
    )
}