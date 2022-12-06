import express from 'express';
const app =express();
const PORT = 4530;
import {userRouter} from './Router/userRouter.js'



//middleware
app.use(express.json()); //verantwortlich zum empfangen der body values im request


app.use('/', userRouter)

app.listen(PORT, ()=>console.log(`app listen to PORT ${PORT}`))