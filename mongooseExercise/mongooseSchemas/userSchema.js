import mongoose from "mongoose";

const Schema = mongoose.Schema;

/* const userAddress = new Schema({
    street: String,
    city: String,
    postal: Number,
    location: {type: String, default: 'Home'}
}) */

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    age: Number,
    logged: {type: Boolean, default: false}

})


export default mongoose.model('User', userSchema)