
export const uploadImage = (req, res)=>{
    console.log("file to upload",req.file)
    res.status(200).json({msg: 'img uploaded'})
}