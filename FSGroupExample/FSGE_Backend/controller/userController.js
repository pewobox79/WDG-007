export const getAllUser=(req,res)=>{
    res.status(200).json({msg: "all user"})
}


export const createUser =(req, res)=>{
    res.status(200).json({msg: 'user created'})
}


export const userLogin =(req, res)=>{

    console.log("body request",req.body)

    res.status(200).json({msg: 'user logged in'})
}