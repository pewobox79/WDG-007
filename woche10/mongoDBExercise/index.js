import express from 'express';
const PORT = 3500;
import { postRouter } from './Router/postRouter.js'

const app = express()

//middleware
app.use(express.json()) //um json format zu verarbeiten

app.use('/', postRouter)

app.listen(PORT, ()=>console.log(`Server listen to Port ${PORT}`))