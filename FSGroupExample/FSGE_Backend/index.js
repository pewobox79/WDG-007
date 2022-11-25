import express from 'express'
const app = express();
const PORT = 4430;

app.get('/', (req, res)=>{

    res.status(200).send('Hallo World')
})

app.listen(PORT, ()=>console.log(`server listen to Port ${PORT}`))