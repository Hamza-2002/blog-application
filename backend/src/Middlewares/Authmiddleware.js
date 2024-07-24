import { userModel } from "../models/user.model.js";
import { AsyncHanlder } from "../utiles/AsyncHanlder.js";
import ErroHanlder from "../utiles/ErrorHanlder.js";
import jwt from 'jsonwebtoken'

const AuthMiddleware = AsyncHanlder(async(req,res,next) =>{
   const token  = req.cookies?.accesstoken
   
  
   if(!token){
    return next(new ErroHanlder(404 , "unAuthorized Token "))
   }
   const decodeUser = jwt.verify(token , process.env.GENERATEACCESSTOKEN_SECRETKEY )
   
   const  user = await userModel.findById(decodeUser._id)
   if(!user){
    return next(new ErroHanlder(404 , "Unauthorized user"))
   }
   req.user = user

   next()
   

})

export  {AuthMiddleware};