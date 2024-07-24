import mongoose from "mongoose";
import ErroHanlder from "../utiles/ErrorHanlder.js";


const DatabaseConnection =async (req, res ,next) =>{
    try {
        
        const response = await mongoose.connect(`mongodb://127.0.0.1:27017/blogapplicaton`)
        if(!response){
            next(new ErroHanlder(201, "dataBase connection failed"))
        }
        console.log(`database connection Successfuly ${response.connection.host}`);
    } catch (error) {
        console.log("database connection Failed");
        process.exit(1)
    }
}

export {DatabaseConnection}