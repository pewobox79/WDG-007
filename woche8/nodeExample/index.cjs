const fs = require('fs');
const path = require('path');
const http = require('http');

//create Dirname
console.log('Dirname', path.dirname(__filename))
//creates basename 
console.log("basename", path.basename(__filename));

//creates file extension
console.log('extname', path.extname(__filename));
//create filename object
console.log("path object", path.parse(__filename))

//concatinate paths - muss kein echter pfad sein...
console.log(path.join(__dirname, 'test', "hello.html"))


//create folder 
/* fs.mkdir(path.join(__dirname, '/test'), {}, (err)=>{
    if (err) throw err;
    console.log("Folder created...")
}) */

//datei beschreiben ..
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hallo für die datei", (err)=>{
    if(err) throw err;
    console.log("datei beschrieben")
}) */

//datei beschreiben und bestehenden inhalt erweitern...
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "hier ist der inhalt", (err)=>{
    if(err) throw err;
    console.log("datei erfolgreich beschrieben");


    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' das ist der append text', (err)=>{
        if(err) throw err;
        console.log("append erfolgreich")
    })

})


 */
//reads asynchrone und erfasst nur den ersten Teil der obigen fs.writeFile...das appendFile kommt erst später...
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data)=>{
    if(err){
        console.log("readFile failed")
    }else{
        console.log(data)
    }
}) */

//file name ändern

/* fs.rename(
    //ursprungsdatei name
    path.join(__dirname, '/test', 'hello.txt'),
    //geänderter dateiname
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err)=>{
        if(err) throw err;
        console.log("datei umbenannt")
    }
) */

/* fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " text für append file", (err)=>{
    if(err) throw err;
    console.log("append file done...")
}); */


//Server für node aufsetzen

//create Server
const server = http.createServer((request, response) => {
    //pfad "/"
    if (request.url === "/") {
        //die index.html muss erst ausgelesen werden, um dann in den response über zu gehen...
        fs.readFile(path.join(__dirname, '/content', 'index.html'), (err, content) => {
            if (err) throw err;
            response.writeHead(200, { 'content-type': 'text/html' })
            response.write(content)
            response.end()

        })

    }

    //alles zu pfad "/test"
    if (request.url === "/new-user") {
        if (request.method === 'POST') {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write('<h1>neuer user wird angelegt</h1>');
            response.end();
        }

        if (request.method === 'GET') {
            response.writeHead(200, { 'content-type': 'text/html' });
            response.write('<h1>irgend was anderes</h1>');
            response.end();
        }

    }

    //provide an API

    if (request.url === "/api/persons") {
        //statisches object - kann auch aus DB oder static file kommen...
        const persons =[
            {name: "Peter", age: 43},
            {name: 'Lucy', age: 23},
            {name: 'Michale', age: 33}
        ]

        //check welche methode ist angesagt
        if(request.method === 'GET'){
            response.writeHead(200, {'content-type': 'application/json'});
            response.write(JSON.stringify(persons));
            response.end()
        }

    }


})
server.listen(3030, () => console.log("server listen to 3030"))

