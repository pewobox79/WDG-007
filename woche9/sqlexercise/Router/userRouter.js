import { Router } from "express";
import { getAllUser, getHomepage, createNewUser } from "../controller/controller.js";
const userRouter = Router();

userRouter.route('/' )
.get(getHomepage)

userRouter.route('/api/user')
.get(getAllUser)
.post(createNewUser)

export default userRouter