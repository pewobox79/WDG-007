import express from 'express'
import cors from 'cors';
const app = express();
const PORT = 3500;
import userRouter from './Router/userRouter.js'
import {logger} from './middleware/middleware.js'
app.set('view engine', 'ejs')

//middleware global
app.use(express.json()); //um eingehende Body-Objecte auslesen zu können z.B. aus dem body von postman
app.use(express.urlencoded({extended: true})); //um ejs form daten erfassen zu können um dem body weiter zu leiten
app.use(cors())
//custom Middleware
//app.use(logger) globale middleware - gilt für alle routes

app.use('/', userRouter);
app.get('/access-denied', (req, res)=>{
    res.send(`<h1>Access denid</h1>`)
})


app.listen(PORT, ()=>console.log(`server listen to ${PORT}`))