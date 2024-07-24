import mongoose , {Schema} from "mongoose";

const commentSchema= new Schema({
    content:{
        type:String,
        required:true,
    }
    , 
    user:{
        type:mongoose.Schema.ObjectId, 
        ref:"USER"
    },
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"BLOG"
    }
}, {timestamps:true})



export const commentModel = mongoose.model("COMMENT" , commentSchema)