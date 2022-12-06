import express from 'express'
const PORT = 4300;
import session from 'express-session';
const app = express()


//sessions object
const sessionData ={
    secret: '1234', //dotenv datei abrufen
    resave: false,
    saveUninitialized: true,
    cookie: {}
}

app.use(session(sessionData)) //stellt allen routes das session object im req. zur verfügung

app.get("/", (req, res)=>{
    res.status(200).send("hallo sessionVsToken")
})

app.get("/login", (req, res)=>{
    console.log("vor dem setzen",req.session)
    req.session.auth = "loggedIn" //wir fügen ein neues property dem session-object hinzu => name ist egal...
    console.log("nach dem setzen", req.session)
    res.status(200).send("auth token gesetzt")
    
});



app.get("/route", (req, res)=>{
    const sessionValues = req.session; //abruf der session object werte 
    console.log("aus route",sessionValues)
    res.status(200).send("session route")
})

app.get("/userprofile", (req, res)=>{

    if(!req.session.auth){
        res.send("please login")
    } else{
        req.session.profileVisited = true;
        res.send("your userprofile")
    }
console.log("aus userprofile",req.session)
    // req.session.auth ? res.send("your userprofile"):res.send("please login");

})
app.listen(PORT, ()=> console.log(`server listen to port ${PORT}`))