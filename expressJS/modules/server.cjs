import {http} from 'http'

const server = http.createServer((rep, res)=>{
    res.writeHead(200);
    res.end('Hello World');
})

server.listen(3030)

module.exports=server