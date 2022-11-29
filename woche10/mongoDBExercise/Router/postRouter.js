import { Router } from "express";
import { getAllPosts, createNewPost, getSinglePost, updateSinglePost, deleteSinglePost } from "../controller/postController.js";
export const postRouter = Router();

postRouter
    .route('/api/posts')
    .get(getAllPosts)
    .post(createNewPost)

postRouter.route('/api/posts/:id')
    .get(getSinglePost)
    .put(updateSinglePost)
    .delete(deleteSinglePost)