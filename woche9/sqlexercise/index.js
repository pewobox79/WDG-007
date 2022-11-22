import express from 'express'
const app = express()
const PORT = 3000;
import userRouter from './Router/userRouter.js'


app.set('view engine', 'ejs')
app.use(express.json())
app.use('/', userRouter)
app.listen(PORT, ()=>console.log(`server listen to ${PORT}`))