import { Router } from 'express'
export const userRouter = Router();

import { userLogin, createUser, getAllUser } from '../controller/userController.js'
userRouter
    .route('/api/user')
    .get(getAllUser)
    .post(createUser)

userRouter
    .route('/api/user/login')
    .post(userLogin)