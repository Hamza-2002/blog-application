import mongoose ,{Schema} from "mongoose";

const blogSchema = new Schema({
    title:{
        type :String,
        required:true,

    },
    image:{
        type:String
    }
    ,content:{
        type:String,
        required:true,    
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"USER"
    },
    Category:
        {
            type:String,
            required:true
        }
    

} , {timestamps:true,})

export const blogmodel = mongoose.model("BLOG" , blogSchema)