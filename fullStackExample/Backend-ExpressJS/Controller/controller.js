import { pool } from "../database/db.js"

export const getUser = async (req, res)=>{

    const {rows} = await pool.query('SELECT * FROM users');
    if(rows){
        res.json({rows})
    }else{
        res.status(500).json({msg: "err"})
    }

    
}


export const registerUser = async (req, res)=>{
console.log("body from register route",req.body)

if(req.body){

    const {firstname, lastname, email, password} = req.body;
    const query = 'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)';
    const values = [firstname, lastname, email, password];
    const {rows} = await pool.query(query, values);


    res.status(200).json({msg: "registred"})
}else{
    res.status(400).json({msg: "error"})
}
    
}


export const getAllArticle = (req, res)=>{

    res.status(200).json({msg: 'all article listed'})
}