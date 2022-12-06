import express from "express";
import session from "express-session";
const app = express()
const PORT = 3000;

app.use(express.json())


const sessionData ={
    secret: '12344',
    resave: false,
  saveUninitialized: true,
  cookie: {} 
}
app.use(session(sessionData))


app.get("/login", (req,res)=>{
    if(!req.session.auth){
    req.session.auth = "loggedIn";
    console.log("in login route",req.session)
    res.status(200).send("authentication data added")
    }else{
        res.send("auth already set")
    }
    
})

app.get("/route", (req,res)=>{

   
    req.session.newSession = "you have a new session on route /"
    const data = req.session
    console.log("in route route",data)
    res.status(200).send("hallo token exercise")
})

app.get("/data", (req,res)=>{
    const sessionData = req.session;
    console.log("in data route", sessionData)
    sessionData.auth ? res.send("dashboard"): res.send("please login")
})

app.get("/userprofile", (req, res)=>{
    req.session.auth ? res.send("userprofile"): res.send("please login")
})



app.listen(PORT, ()=>console.log(`server listen to port ${PORT}`))