import express from 'express'
const app = express();
const PORT = 4430;
import cors from 'cors';

import {userRouter} from './Routing/userRouter.js'

//middlewares
app.use(express.json()); //macht alle routes für JSON empfänglich
app.use(cors());

//Routing
app.use('/', userRouter);

app.listen(PORT, ()=>console.log(`server listen to Port ${PORT}`))