import mongoose from "mongoose";

const url = process.env.MONGO_URL as string;
let connection : typeof mongoose;


const startDb = async () =>{
    if(!connection) connection = await mongoose.connect("mongodb+srv://anuragsidhu72:test123@cluster0.fqfgeug.mongodb.net/")
    return connection;
}

export default startDb