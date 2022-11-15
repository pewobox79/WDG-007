const http = require("http")
const path = require('path')
const fs = require('fs')


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, 'content-type', 'text/html');
        fs.readFile("./content/index.html",null, function (err, data) {
            if (err) {
                res.writeHead(404);
                res.write("upps")
            }else{
                res.write(data)
            }
            
        })

    }

    if (req.url === "/about") {
        if (req.method === "GET") {
            res.end("get about me")
        }
        if (req.method === "POST") {
        const value = req.body.name
            res.end(value)
        }

    }




})

server.listen(3030)