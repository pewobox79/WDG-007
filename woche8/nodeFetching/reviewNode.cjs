const fs = require('fs');
const path = require('path');
const http = require('http');
const axios = require('axios');


//content directory erstellen

function createDirectory() {
    fs.mkdir(path.join(__dirname, '/content'), {}, (err) => {
        if (err) throw err;
        console.log("directory erstellt...")
    });
}

//createDirectory();

function createFile() {
    fs.writeFile(path.join(__dirname, '/content', 'test.txt'), 'Hallo Test.txt datei', (err) => {
        if (err) throw err;
        console.log("File written...")
    })
}

//createFile();


function readFile() {

    fs.readFile(path.join(__dirname, '/content', 'test.txt'), 'utf8', (err, data) => {
        if (err) throw err;
        console.log("der inhalt aus test.txt ist: ", data)

    })
}

//readFile();


//server aufsetzen

const PORT = 4555;
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fs.readFile(path.join(__dirname, '/public', '/index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(content);
            res.end();
        })
    }

    if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, '/public', '/contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(content);
            res.end()
        })
    }

    if (req.url === "/datafetch") {
        const URL = 'https://reqres.in/api/users?page=2'
        
        axios.get(URL)
        .then((response) => {

            console.log(response.data);
            //direkt den res ansprechen und daten ausgeben...
            res.writeHead(200, {'content-type': 'application/json'})
            res.write(JSON.stringify(response.data));
            res.end();

        }).catch((err)=>{

            console.log(err);

        })

       
    }

})

server.listen(PORT, () => console.log(`server listen to ${PORT}`))
