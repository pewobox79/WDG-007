import { Router } from "express";
import { getUser, registerUser } from "../Controller/controller.js";
import { auth, checkUser } from "../middleware/middleware.js";

export const userRouter = Router()


userRouter.route('/api/user')
.get(checkUser, auth, getUser)
.post(registerUser)


userRouter.route('/api/login')
.post(checkUser)
