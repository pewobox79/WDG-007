import { pool } from '../db.js'
import { validationResult } from 'express-validator'



export const getHomepage = (req, res, next) => {
    //console.log(pool);
    console.log("validUser aus getHomepage",req.validUser)
    console.log("access Token aus getHomepage",req.myAccessToken);
    res.render('/Users/pewobox/WDG007/woche9/sqlexercise/public/index.ejs')
    next() //gibt aufforderung an middle weiter...
}

//all user controller
export const getAllUser = async (req, res, next) => {
    console.log("reqUrl", req.myRequestUrl)
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows)
    next()
   
}

export const createNewUser = async (req, res) => {

    //check validation mit express-validate ob body values auch nach dme schema passen
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    //destructure req.body
    const { firstname, lastname, age } = req.body;
    //parameter für die Query festlegen
    const myQuery = 'INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *'
    const myValues = [firstname, lastname, age];

    try {
        const result = await pool.query(myQuery, myValues);
        console.log("result return", result.rows[0])
        return res.status(200).json(result)
    } catch (err) {
        console.log(err.stack)
    }

    res.status(200).json({ msg: "new user created" })
}

//sinlge user controller
export const getSingleUser = async (req, res) => {
    //id aus parameter erhalten
    const { id } = req.params;

    //parameter ID wird in die suche eingesetzt
    const { rows } = await pool.query('SELECT * FROM users WHERE id=$1;', [id]);

    res.json(rows)

}

export const updateSingleUser = async (req, res) => {

    const { id } = req.params;
    console.log(req.search)
    const { firstname, lastname, age } = req.body;

    const myQuery = 'UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4 RETURNING *;'
    const myValues = [firstname, lastname, age, id];

    try {
        const result = await pool.query(myQuery, myValues);
        console.log(result)
        return res.status(200).json({ msg: `user mit id ${id} wurde erfolgreich aktualisiert` });

    } catch (err) {
        console.log(err.stack)
    }
    res.send("user update")
}

export const deleteSingleUser = async (req, res) => {

    const { id } = req.params;

    const myQuery = 'DELETE FROM users WHERE id=$1';
    const myValue = [id];

    try {
        const { rows } = await pool.query(myQuery, myValue)
        return res.status(202).json({ msg: `user mit id ${id} wurde gelöscht` });
    }
    catch (err) {
        console.log(err.stack)
    }


    res.send("single user deleted")
}

