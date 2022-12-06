import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import cookieSession from 'cookie-session';
dotenv.config();
const verifyToken =(req, res, next)=>{

    const {authorization} = req.headers;

    jwt.verify(authorization, process.env.JWT_SECRET, (err, user)=>{

        if(err) {
            res.sendStatus(401)
        }else{

            req.user = user;
            next();
        }
    })
    
   

}

export default verifyToken;
