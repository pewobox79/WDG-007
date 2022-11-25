import { pool } from "../database/db.js"
import url from 'url';

export const checkUser =async(req, res, next)=>{
 console.log(req.body)
    const {password, username} = req.body;
    //const query= 'SELECT * FROM token RIGHT JOIN users ON token.user_id = users.id WHERE username=$1 AND password=$2;'
    const query= 'SELECT * FROM users WHERE username=$1 AND password=$2;'
    const value =[username, password]
    
    try{

        const {rows} = await pool.query(query, value);
        if(rows.length >0){
        
                req.checkedUser = rows
                console.log("user checked",rows)
                res.status(200).json({data: rows})
                next()
            
        }else{
            res.status(404).json({msg: 'user does not exist'})
        }

    }catch{

        res.status(404).json({msg: "failed request"})

    }
    
   
}

export const auth =(req, res, next)=>{

    console.log('auth user')
    next()

}


