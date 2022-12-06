
import { Router } from "express";
import { getAllUser, createUser, getSingleUser, updateUser, deleteUser } from "../controller.js/userController.js";

export const userRouter = Router();

userRouter
.route('/api/users')
.get(getAllUser)
.post(createUser)


userRouter.route('/api/users/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)


