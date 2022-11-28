import { pool } from "../database/pgDb.js";

export const getAllUser=(req,res)=>{
    res.status(200).json({msg: "all user"})

}


export const createUser = async (req, res)=>{
    console.log("new user incoming",req.body)

const {firstname, lastname, username, password} = req.body; //destructure body data
const query = 'INSERT INTO users (firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *'; 
const values = [firstname, lastname, username, password]

if(req.body){
    const {rows} = await pool.query(query, values); //hier ohne await ist die abfrage noch nicht 100% erledigt....daher kein output in console danach
    console.log("neuer user angelegt", rows);
    res.status(200).json({msg: 'user created'}); //medlung auf react frontend
}else{
    res.status(404).json({msg: 'no data transfer'}); //meldung react frontend
}

    
}


export const userLogin =(req, res)=>{

    //loggedUser ist des custom req.property aus der middleware checkUserLoginRequest
    console.log("body request",req.loggedUser)

    res.status(200).json({msg: 'user logged in'})
}
