import { userModel } from '../models/user.model.js';
import { AsyncHanlder } from '../utiles/AsyncHanlder.js'
import ErrorHanlder from '../utiles/ErrorHanlder.js'
import { ApiResponse } from '../utiles/ApiResponse.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const GenerateTokens = async (userid) => {
    try {
        const user = await userModel.findById(userid);

        const accessToken = user.GenerateAccessToken()
        const refreshToken = user.GenerateRefreshToken()



        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: true })

        return { refreshToken, accessToken }
    } catch (error) {
        console.log(error);
    }
}


export const RegisterUser = AsyncHanlder(async (req, res, next) => {

    const { username, email, password } = req.body;

    if (!username || !email || !password) {

        return next(new ErrorHanlder(401, "All Fields must be required"))

    }
    const userExist = await userModel.findOne({ email });

    if (userExist) {

        return next(new ErrorHanlder(401, "Email Has Already Taken"))
    }

    const user = await userModel.create({ username, email, password })
    if (!user) {
        return next(new ErrorHanlder(402, "User Registartion Failed"))
    }

    const finalUser = await userModel.findOne({ _id: user._id }).select("-password -refreshToken")

    res.status(201).json(
        new ApiResponse(
            "user Register Successfuly",

            finalUser,
            201
        )

    )

})


export const LoginUser = AsyncHanlder(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHanlder(401, "all feild are required"))
    }
    const userfind = await userModel.findOne({ email })
    if (!userfind) {
        return next(new ErrorHanlder(401, "invalid Credientals"))
    }
    const comparepassword = await userfind.comparePassword(password)

    if (!comparepassword) {
        return next(new ErrorHanlder(401, "invalid Credientals"))
    }

    const { refreshToken, accessToken } = await GenerateTokens(userfind._id)

    const loginUser = await userModel.findById(userfind._id).select("-password  -refreshToken")

    const options = {
        httpOnly: true,
        secure: false
    }
    res
        .cookie("accesstoken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .status(201).json(
            new ApiResponse(
                "user Register Successfuly",
                {
                    user: loginUser,
                    accessToken,
                    refreshToken
                }
                , 201
            )
        )
})


export const LogoutUser = AsyncHanlder(async (req, res, next) => {
    const user = await userModel.findById(req.user._id);

    if (!user) {
        return next(new ErrorHanlder(401, "user not found"))
    }

    user.refreshToken = null;
    await user.save({
        validateBeforeSave: true
    })

    res.clearCookie("accesstoken")
    res.status(201).json(
        new ApiResponse("user Logout Successfuly", {}, 201)
    )
})


// generateaccess token
export const accessToken = AsyncHanlder(async(req,res,next) =>{
    const refreshToken = req.Cookies.refreshToken;
    if(!refreshToken){
        return next(new ErrorHanlder(404, "RefreshToken has been expired"))
    }
    const decodedToken = jwt.verify(refreshToken , process.env.GENERATEREFRESHTOKEN_SECRETKEY)
    if(!decodedToken){
        return next(new ErrorHanlder(404 , "invalid Token"))
    }

    const user = await userModel.findById(decodedToken._id);
    if(!user){
        return next(new ErrorHanlder(404 , "invalid token"))
    }

    if (user.refreshToken !== refreshToken) {
        return next(new ErrorHanlder(404 , "invalid Token"))
    }

   const {newrefreshToken , accessToken} = await GenerateTokens(user?._id);
   res.cookie("refreshToken" , newrefreshToken , options).cookie("accessToken" , accessToken , options).status(201).json(new ApiResponse("login " , {
    refreshToken:newrefreshToken,
    accessToken
   } , 201))
})

export const GetSingleUser = AsyncHanlder(async (req, res, next) => {
    const user = await userModel.findById(req.user._id)
    if (!user) {
        return next(new ErrorHanlder(401, "User cannot Find"))
    }
    res.status(201).json(new ApiResponse("user find successufyl", user, 201))
})


export const updateUser = AsyncHanlder(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new ErrorHanlder(400, "user id must be Required"))
    }

    const user = await userModel.findById(id)
    if (!user) {
        return next(new ErrorHanlder(400, "Cannot Find the user"))
    }
    user.username = req.body.username,
        user.email = req.body.email,

        await user.save() // validateBeforeSave 
    const updatedUser = await userModel.findById(id);
    if (!updatedUser) {
        return next(new ErrorHanlder(401, "updated User Not Found"))
    }
    res.status(201).json(new ApiResponse("user Upadated Successfuly", updatedUser, 201))
})


// forget password

export const ForgetPassword = AsyncHanlder(async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return next(new ErrorHanlder(404, "Email Must Be Required"))
    }

    const user = await userModel.find({email:email} )
    

    if (!user) {
        return next(new ErrorHanlder(404, "user Not Found"))
    }

    res.status(201).json(new ApiResponse("user find it" , user, 201))
})


// Reset Password 

export const ResetPassword = AsyncHanlder(async(req,res,next) =>{
    const {password} = req.body;
    

    const {id} = req.params
    if(!password){
        return next(new ErrorHanlder(400,"User Password must Be Required"))
    }
    if(!id){
        return next(new ErrorHanlder(400,"User Id must Be Required"))
    }
    const User = await userModel.findById(id)
    if(!User){
        return next(new ErrorHanlder(400 ,"User Cannot Found"))
    }

    const hashpassword = await bcrypt.hash(password , 10)
    if(!hashpassword){
        return next(new ErrorHanlder(400 ,"Password Did't hashed"))
    }
    
    User.password = hashpassword;
    await User.save()
    usermodel
    console.log(User.password);
    console.log(hashpassword);
    const comparePassword = await User.comparePassword(hashpassword);
    
    if(!comparePassword){
        return next(new ErrorHanlder(400 ,"invalid Credientals"))
    }

    res.status(201).json(new ApiResponse("password updated Successfuly" , {} , 201))
    
})

// $2b$10$cN1TEM5cDQZjAfaIFa1D6uGza3eLg2TpZqiVB9/adXlr6R.JNBeES
// $2b$10$xf2IqdGFFFnFGCn3SPDIW.7IPVmKsMY6QobwkFW.DtRS3qVCW2NgG

// admin can do this only
export const GetAllUsers = AsyncHanlder(async (req, res, next) => {
    const allUsers = await userModel.find({})
    if (!allUsers) {
        return next(new ErrorHanlder(401, "Cannot find the users"))
    }
    res.status(201).json(
        new ApiResponse("Users find successfuly", allUsers, 201)
    )
})

// admin can do this only

export const covertUserToAdmin = AsyncHanlder(async (req, res, next) => {
    const { id } = req.params
    if (!id) {
        return next(new ErrorHanlder(401, "user id is required"))
    }
    const user = await userModel.findById(id)
    if (!user) {
        return next(new ErrorHanlder(401, "user not Found"))
    }

    user.role = "admin"
    await user.save({validateBeforeSave:true})

    res.status(201).json(new ApiResponse("user has been converted into admin", user, 201))
})

// delete user only by admin 

export const DeleteUser = AsyncHanlder(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new ErrorHanlder(401, "user id is required"))
    }
    const user = await userModel.findByIdAndDelete(id)
    if (!user)
        return next(new ErrorHanlder(401, "user not found"))

    res.status(201).json(new ApiResponse("user Deleted successfuly",))
})