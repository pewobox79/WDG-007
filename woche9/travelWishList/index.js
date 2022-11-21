import express from 'express';
const PORT = 3000;
const app = express();

import wishlistRouter from './routing/wishlistRouter.js'

app.use(express.json())

app.use('/api/countries', wishlistRouter);

app.listen(PORT, ()=>console.log(`server listen to ${PORT}`))

