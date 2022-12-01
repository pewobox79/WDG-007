import { Router } from "express";
import { getAllPosts, createNewPost, getSinglePost, updateSinglePost, deleteSinglePost } from "../controller/postController.js";
import { createNewUser, deleteUser, getAllUser, getSingleUser, updateUser } from "../controller/userController.js";
export const userRouter = Router();

userRouter
    .route('/api/users')
    .get(getAllUser)
    .post(createNewUser)

userRouter.route('/api/users/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)