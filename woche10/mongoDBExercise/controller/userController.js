import dbm from "../database/dbm.js ";
import User from '../mongooseModels/userModel.js';
import mongoose from "mongoose";

export const createNewUser =(req,res)=>{

    const {name, lastname, age} = req.body;
    User
    .create({name: name, lastname: lastname, age: age })
    .then(newUser => res.status(200).json(newUser))
    .catch(err=> res.status(404).json(err.message))
    
}


export const getAllUser =async (req, res)=>{

    const userList = await User.find();
    res.status(200).send(userList)
}
export const getSingleUser =async (req,res)=>{

    const {id} = req.params;
    try{
        const selectedUser = await User.findById(id);
        console.log(selectedUser)
        res.status(200).json(selectedUser)
    }catch(err){
        console.log("error", err)
    }
   
}

export const updateUser =async (req,res)=>{

    const {id}=req.params
    const {name, lastname, age} = req.body

    try{
    const updatedUser = await User.findOneAndUpdate({_id: id}, {name: name, lastname: lastname, age: age}, {new: true})
    console.log(updatedUser)
    res.status(200).json(updatedUser)
    }catch(err){
        console.log(err)
    }
}

export const deleteUser =async (req,res)=>{

    const {id}=req.params
    try{
        const deletedUser = await User.findOneAndDelete({_id: id});
        console.log(deletedUser);
        res.status(200).json({msg: `user ${id} deleted`})
    }catch(err){
        console.log(err)
    }
   

    
}