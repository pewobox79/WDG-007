import { pool } from "../database/pgDb.js";

export const getAllUser=(req,res)=>{
    res.status(200).json({msg: "all user"})
}


export const createUser =(req, res)=>{
    console.log("new user",req.body)

//TODO start am montag hier....mit der data creation
    res.status(200).json({msg: 'user created'})
}


export const userLogin =(req, res)=>{

    //loggedUser ist des custom req.property aus der middleware checkUserLoginRequest
    console.log("body request",req.loggedUser)

    res.status(200).json({msg: 'user logged in'})
}