import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config()


try{
    const mongoDB = process.env.MONGO_DB_HOST;
    const client = await mongoose.connect(mongoDB);
    console.log(`Database connected with host ${client.connection.host}`);

}catch(err){
    console.log(err)

}

const db = mongoose.connection;

export default db

