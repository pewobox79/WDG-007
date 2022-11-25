import { Router } from "express";
import { getAllUser, getHomepage, createNewUser, getSingleUser, deleteSingleUser, updateSingleUser } from "../controller/controller.js";

const userRouter = Router();
//validate input 
import { body } from 'express-validator';

//import Middleware

import { localLogger, accessToken, checkAccessToken } from '../middleware/middleware.js'

userRouter.use(checkAccessToken); // => für globale verwendung in userRouter

userRouter
    .route('/')
    .get(accessToken, getHomepage)

userRouter
    .route('/api/user')
    .get(localLogger, getAllUser)
    .post(body('firstname').isLength({ min: 1 }), body('lastname').isLength({ min: 1 }), body('age').isInt(), createNewUser)


userRouter
    .route('/api/user/:id')
    .get(getSingleUser)
    .put(updateSingleUser)
    .delete(deleteSingleUser)


export default userRouter