import { commentModel } from "../models/comments.model.js";
import { ApiResponse } from "../utiles/ApiResponse.js";
import { AsyncHanlder } from "../utiles/AsyncHanlder.js";
import ErroHanlder from "../utiles/ErrorHanlder.js";

export const postcomments = AsyncHanlder(async(req,res,next) =>{
    const {content , blogid} = req.body;
 
    
   
    if(!content || !blogid){
        return next(new ErroHanlder( 404,"comment are Required"))
    }

   const comment = new  commentModel({content , user:req.user._id   , blog:blogid})
    const newcomment=  await comment.save()
    if(!newcomment){
        return next(new ErroHanlder(404 , "comment not created Scccessfuly"))
    }
    
    res.status(201).json(new ApiResponse("comment Created Successfuly" , comment , 201))
})


export const GetAllCommentsByUser = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params
   
    const allComments = await commentModel.find({blog:id}).populate("user").populate("blog");
    if(!allComments){
        return next(new ErroHanlder(400,"Comments not Found"))
    }

    res.status(201).json(new ApiResponse("Comments Find Sccessfuly" , allComments , 201))
})

// get single comment 
export const GetSingleComment = AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;

    const single_comment = await commentModel.findById(id).populate("user").populate("blog");
    if(!single_comment){
        return next(new ErroHanlder(400 , "comment not found"))
    }

    res.status(201).json(new ApiResponse("comment find successfuly" , single_comment , 201))
})

export const deleteCommentOnlyUser=  AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    console.log(id);
    if(!id){
        return next(new ErroHanlder(400, "Comment id must be required"))
    }

    const DeletedComment = await commentModel.findByIdAndDelete({_id:id})

    res.status(201).json(new ApiResponse("comment deleted Successfuly" , DeletedComment , 201))
})

// only Admin can do this 

export const GetAllComments = AsyncHanlder(async(req,res,next) =>{
    const allComments = await commentModel.find({}).populate("user").populate("blog");
    
    if(!allComments){
        return next(new ErroHanlder(400,"Comments not Found"))
    }

    res.status(201).json(new ApiResponse("Comments Find Sccessfuly" , allComments , 201))
})



// delete coment by admin 
export const deleteCommentOnlyAdmin =  AsyncHanlder(async(req,res,next) =>{
    const {id} = req.params;
    
    if(!id){
        return next(new ErroHanlder(400, "Comment id must be required"))
    }

    const DeletedComment = await commentModel.findByIdAndDelete(id)
   


    res.status(201).json(new ApiResponse("comment deleted Successfuly" , DeletedComment , 201))
})