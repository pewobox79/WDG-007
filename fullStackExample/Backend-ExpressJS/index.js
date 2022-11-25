import express from 'express';
import cors from 'cors';
import { userRouter } from './Router/userRouting.js';
const PORT = 3450;
const app = express()


app.use(express.json())
app.use(cors())

app.use('/', userRouter)



app.listen(PORT, ()=>console.log(`app listen to Port ${PORT}`))