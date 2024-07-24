import mongoose from "mongoose";
import { blogmodel } from "../models/blog.model.js";

import { ApiResponse } from "../utiles/ApiResponse.js";
import { AsyncHanlder } from "../utiles/AsyncHanlder.js";
import ErroHanlder from "../utiles/ErrorHanlder.js";
import { Cloudinary } from "../utiles/cloudinary.js";


export const createBlog = AsyncHanlder(async(req,res,next) =>{
    const {title , content } = req.body;
    if(!title || !content ){
        return next(new ErroHanlder(404, "All Field are Required"))
    }
    const findBlog = await blogmodel.findOne({title});
    if(findBlog){
        return next(new ErroHanlder(404, "Title Already Taken please try another title"))
    }
    const image = req.file.path;
    if(!image){
        return next(new ErroHanlder(404 , "thumbnai required "))
    }
    const cloudianry = await Cloudinary(image)

    if(!cloudianry){
        return next(new ErroHanlder(404 , "cloudinary fail "))
    }
   

    const blog = await blogmodel.create({
        user:req.user._id,
        title , content,
        Category:req.body.cat,
        image:cloudianry
    })

    res.status(201).json(new ApiResponse("blog created successfuly" , blog , 201))
})

// get single blog 
export const GetSingleBlog = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    if(!id){
        return next(new ErroHanlder(400 , "Blog Id must be Required"))
    }
    const Singleblog = await blogmodel.findById(id).populate("user")
    if(!Singleblog){
        return next(new ErroHanlder(400 , "Blog Didn't find"))
    }

    res.status(201).json(new ApiResponse("blog find successfuly" , Singleblog , 201))
})

export const updateblog = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    if(!id){
        return next(new ErroHanlder(400, "blog id must be required"))
    }

    const blog = await blogmodel.findById(id)   
    if(!blog){
        return next(new ErroHanlder(400 , "Cannot Find User"))
    }   

    blog.title = req.body.title;
    blog.content = req.body.content;

    await blog.save()

    const updatedBlog = await blogmodel.findById(id);
    res.status(201).json(new ApiResponse("blog upadated Successfuly" ,updatedBlog , 201))
})


// login users blogs 

export  const loginUserblogs = AsyncHanlder(async(req,res,next) =>{
    const id = req.user._id;

    const userblogs = await blogmodel.find({user:id})

    if(!userblogs){
        return next(new ErroHanlder(404 , "userblogs not founded"))
    }
    res.status(201).json(new ApiResponse("user blogs find  successfuly" , userblogs , 201))
})


// delele blog

export const deleleblog = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    if(!id){
        return next(new ErroHanlder(400, "blog id must be required"))
    }

    const blogDelete = await blogmodel.findByIdAndDelete(id)
    res.status(201).json(new ApiResponse("blog deleted Successfuly" , blogDelete , 201))
})

export const getAllBlogs = AsyncHanlder(async(req,res,next) =>{
    const allBlogs = await blogmodel.find({}).populate("user")
    if(!allBlogs){
        return next(new ErroHanlder(404, "All blogs are not find"))
    }

    res.status(201).json(new ApiResponse("All blogs get successfuly" , allBlogs , 201))
})

// get all blogs for admin

export const  AdminGetAllBlogs = AsyncHanlder(async(req,res,next) =>{
    const Allblogs = await blogmodel.find({})
    if(!Allblogs){
        return next(new ErroHanlder(404, " blogs are not find"))
    }
    
    res.status(201).json(new ApiResponse("All blogs get successfuly" , {user:req.user._id ,Allblogs}, 201))
})

export const deleleblogOnlyForAdmin = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    if(!id){
        return next(new ErroHanlder(400, "blog id must be required"))
    }

    const blogDelete = await blogmodel.findByIdAndDelete(id)
    res.status(201).json(new ApiResponse("blog deleted Successfuly" , blogDelete , 201))
})