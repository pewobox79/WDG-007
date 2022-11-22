import express from 'express'
const app = express();
const PORT = 3000;
import userRouter from './Router/userRouter.js'

app.set('view engine', 'ejs')

//middleware global
app.use(express.json()); //um eingehende Body-Objecte auslesen zu können z.B. aus dem body von postman
app.use(express.urlencoded({extended: true})); //um ejs form daten erfassen zu können um dem body weiter zu leiten

app.use('/', userRouter);

app.listen(PORT, ()=>console.log(`server listen to ${PORT}`))