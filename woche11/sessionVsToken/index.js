import express from 'express'
const PORT = 4300;
const app = express();
import * as dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import verifyToken from './middleware/verifyToken.js'
import dashboardContent from './middleware/dashboardContent.js'
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';

app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res)=>{
    console.log("secret",process.env.JWT_SECRET)
    res.status(200).send("hallo sessionVsToken")
})


app.post("/login", async (req,res)=>{
    
    const {username, password} = req.body; //gehen davon aus das credential valide sind

    const cookiesData = req.cookies;
    console.log(cookiesData)
    //login check der daten vom Login form...username, password

    const token = await jwt.sign({username: username, password: password }, process.env.JWT_SECRET); 

    res.cookie('validation', token, {httpOnly: true})
    //res.setHeader('Set-Cookie', `token=${token}`, {httpOnly: true});
    
    res.send(token)
})

app.get("/profile", verifyToken, dashboardContent,  (req, res)=>{
 console.log(req)
    const dashboard = req.dashboard
    const {username} = req.user;

    console.log(dashboard)
    res.status(200).send(`Hello ${username}`)
})




app.listen(PORT, ()=> console.log(`server listen to port ${PORT}`))