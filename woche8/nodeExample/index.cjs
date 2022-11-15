const fs = require('fs');
const path = require('path');

//create Dirname
console.log('Dirname',path.dirname(__filename))
//creates basename 
console.log("basename",path.basename(__filename));

//creates file extension
console.log('extname',path.extname(__filename));
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

fs.rename(
    //ursprungsdatei name
    path.join(__dirname, '/test', 'hello.txt'),
    //geänderter dateiname
    path.join(__dirname, '/test', 'helloworld.txt'),
    (err)=>{
        if(err) throw err;
        console.log("datei umbenannt")
    }
)
