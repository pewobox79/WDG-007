import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    lastname: String,
    age: Number,
    
})

export default mongoose.model('User', userSchema)