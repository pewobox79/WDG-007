import url from 'url'; //node module import
import { pool } from '../db.js';

export const logger = (req, res, next) => {
    console.log("ist eingeloggt");
    next();
}

export const localLogger = (req, res, next) => {

    console.log("my path", req.url);
    console.log("local logger logged!");

    req.myRequestUrl = req.url
    next();
}

export const accessToken = (req, res, next) => {

    const myQuery = url.parse(req.url, true).query;

    if (myQuery.token) {
        const accessToken = myQuery.token;
        req.myAccessToken = accessToken;
        next()
    } else {
        res.status(403).redirect("localhost:3000/error")
    }


}


export const checkAccessToken = async (req, res, next) => {

    //auslesen des token aus der URL und in console ausgeben
    const myTokenString = url.parse(req.url, true).query.token;
    console.log("myTokenString", myTokenString);
    

    //check die datenbank nach users, die einen token haben...
    const myDBQuery = `SELECT * FROM token LEFT JOIN users ON token.user_id = users.id WHERE value=$1`;
    const valuesArray =[myTokenString]
    
    //try - catch brauch ich wenn es die fehlermeldung "UnhandledPromiseRejectionWarning:" auftaucht
    try {
        const { rows } = await pool.query(myDBQuery, valuesArray);
        console.log("users with token", rows);
         req.validUser = rows[0];
    } catch (err) {
        console.log("fehler")
    }

   
   next()
}