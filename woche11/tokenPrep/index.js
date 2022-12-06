import express from "express";
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import verifyToken from "./middleware/verifyToken.js";
dotenv.config();
const app = express()
const PORT = 3000;

app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).send("jwt token exercise")
})

app.post("/login", (req,res)=>{
const {firstname, password} = req.body;
    const token = jwt.sign({name: firstname}, process.env.JWT_SECRET)
    res.send({token})
})

app.get("/profile", verifyToken, (req,res)=>{
    const {name} = req.user;
    res.status(200).send(`Hello ${name}`)
})



app.listen(PORT, ()=>console.log(`server listen to port ${PORT}`))