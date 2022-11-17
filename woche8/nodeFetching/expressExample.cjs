const axios = require('axios');
const express = require('express');
const path = require('path');


const app = express();

//extension ejs verfügbar machen..dann auch die .html in .ejs dateien umschreiben
app.set('view engine', 'ejs');
//middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '/public', 'index.ejs')
    //rendering von .ejs datei 
    res.render(filePath)
})


app.get('/user/:id', (req, res) => {
    console.log(req);
    res.send(`user Id: ${req.params.id} `)
})

app.get("/:id", (req, res) => {
    const filePath = path.join(__dirname, '/public', 'index.ejs')
    res.render(filePath, {})
})








app.listen(4344, () => console.log("server listen to 4344"));