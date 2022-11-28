import { Router } from "express";
import { uploadImage } from "../controller/imgController.js";
import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //const ext = path.extname(file.originalname)
      cb(null, file.originalname)
    }
  })

const upload = multer({storage: storage});
export const imgRouter = Router();

imgRouter
.route('/api/images')
.post(upload.single('image'), uploadImage)