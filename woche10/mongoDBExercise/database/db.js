import {MongoClient} from 'mongodb';

const url='mongodb+srv://admin:12345@wdg007.hndmeqr.mongodb.net/?retryWrites=true&w=majority'; //mongodb url 
const client = new MongoClient(url);

const dbName = 'WDG007' //name der Datenbank


try{
    await client.connect(); //verbindung zu mongodb server
    console.log('Connection established')
} catch(err){
    console.log(err)
}

const db = client.db(dbName)

export default db