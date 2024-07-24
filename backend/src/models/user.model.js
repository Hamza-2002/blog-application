import mongoose, {Schema} from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username:{
        type :String,
        required:true,
        trim : true,
        lowercase :true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type :String,

    }
    , role:{
        type:String,
        default:"user"
    },
    refreshToken:{
        type:String
    }

}, {timestamps:true}
)



userSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password , 10)
    next()
})
userSchema.methods.comparePassword = async function(password){
    
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.GenerateAccessToken = function(){
   return jwt.sign(
        {
        _id:this._id,
        username:this.username,
        email:this.email
        
  },
  process.env.GENERATEACCESSTOKEN_SECRETKEY , 
  {
    expiresIn:process.env.GENERATEACCESSTOKEN_EXPIRTY
  }
    )
}
userSchema.methods.GenerateRefreshToken = function(){
    return jwt.sign(
        {
        _id:this._id,
        
  },
  process.env.GENERATEREFRESHTOKEN_SECRETKEY , 
  {
    expiresIn:process.env.GENERATEREFESHTOKEN_EXPIRTY 
  }
    )
}

export const userModel = mongoose.model("USER" , userSchema)
