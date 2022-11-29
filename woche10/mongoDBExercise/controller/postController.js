import { ObjectId } from "mongodb";
import db from "../database/db.js"

export const getAllPosts =async (req,res)=>{
    
    const postsCollection = await db.collection('posts');
    const posts = await postsCollection.find().toArray();

    res.status(200).json(posts)
} 

export const createNewPost = async (req,res)=>{
    
    const {title, body} = req.body; 

    const postsCollection = await db.collection('posts');
    const newPost = await postsCollection.insertOne({
        title: title,
        body: body,
        date: new Date()
    });

    if(!newPost.acknowledged){
        res.status(404).json({msg: 'get the fuck out'})
    }else{
        res.status(200).json({msg: 'new post created', newPost})
    }
    
} 

export const getSinglePost = async (req,res)=>{

    const {id} = req.params //get :id information to check post
 
    const postsCollection = await db.collection('posts');
    const singlePost = await postsCollection.find({_id: ObjectId(id)}).toArray();
    res.status(200).json(singlePost)
} 



export const deleteSinglePost =(req,res)=>{
    res.status(200).json({msg: ' post deleted'})
} 

export const updateSinglePost =(req,res)=>{
    res.status(200).json({msg: 'post updated'})
} 