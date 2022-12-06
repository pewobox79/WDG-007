import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import verifyToken from "./middleware/verifyToken.js";
dotenv.config();
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).send("jwt token exercise")
})

app.post("/signup", async (req,res)=>{
const {name, email, password} = req.body;
console.log(name, email, password);

const hash = await bcrypt.hash(password, 5);

const newUser={
    name: name,
    password: hash,
    email: email
};

    res.send("sign up")
})

app.post("/signin", (req,res)=>{

    res.send("sign in")
})


app.get("/profile", (req,res)=>{
    
    res.status(200).send(`Hello userprofile`)
})





app.listen(PORT, ()=>console.log(`server listen to port ${PORT}`))