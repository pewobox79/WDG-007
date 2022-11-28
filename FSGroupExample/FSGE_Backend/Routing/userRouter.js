import { Router } from 'express'
export const userRouter = Router();
import { checkUserLoginRequest, checkUsername } from '../middleware/middleware.js';

import { userLogin, createUser, getAllUser } from '../controller/userController.js'

userRouter
    .route('/api/user')
    .get(getAllUser)
    .post(checkUsername, createUser)

userRouter
    .route('/api/user/login')
    .post(checkUserLoginRequest, userLogin) //middleware is vor dem userLogin geschalten und checkt datenbank ob user über drin ist.