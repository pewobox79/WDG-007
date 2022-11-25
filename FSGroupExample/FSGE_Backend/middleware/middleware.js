import { pool } from "../database/pgDb.js";


export const checkUserLoginRequest = async (req, res, next)=>{

    //destrukturieren des req.body
    const {username, password} = req.body;

    //abfragewerte 
    const query = 'SELECT * FROM users WHERE username=$1 AND password=$2';
    const values = [username, password];

    if(username.length < 1 || password.length < 1){
        res.status(404).json({msg: "invalid credentials"});

    }else{

        const {rows} = await pool.query(query, values);
     
        if(rows.length === 0){
            res.status(404).json({msg: 'user nicht vorhanden'});
        }else{
            req.loggedUser = rows[0];
            next()
        }
        
        //rows.length === 0 ? res.status(404).json({msg: 'user nicht vorhanden'}) : req.loggedUser = rows[0]

    }
    
}