import express from 'express'
const app = express();
const PORT = 4430;
import cors from 'cors';

import {userRouter} from './Routing/userRouter.js'
import { imgRouter } from './Routing/imgRouter.js';

//middlewares
app.use(express.json()); //macht alle routes für JSON empfänglich
app.use(cors());

//Routing
app.use('/', userRouter);
app.use('/', imgRouter)


app.listen(PORT, ()=>console.log(`server listen to Port ${PORT}`))