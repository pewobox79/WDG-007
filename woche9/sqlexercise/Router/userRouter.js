import { Router } from "express";
import { getAllUser, getHomepage, createNewUser, getSingleUser, deleteSingleUser, updateSingleUser } from "../controller/controller.js";
const userRouter = Router();
//validate input 
import {body} from 'express-validator';

userRouter
    .route('/')
    .get(getHomepage)

userRouter
    .route('/api/user')
    .get(getAllUser)
    .post(body('firstname').isLength({min: 1}),body('lastname').isLength({min: 1}),body('age').isInt(), createNewUser)


userRouter
    .route('/api/user/:id')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser)


export default userRouter