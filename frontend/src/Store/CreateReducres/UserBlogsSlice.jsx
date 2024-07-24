import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getSingleblog = createAsyncThunk(
    "blog/single",
    async(id) =>{
        const {data} = await axios.get(`/api/v1/blog/${id}/single`)
       
        return data
    }
)


export const loginUserblogs = createAsyncThunk(
    "login/user/blogs",
    async() =>{
  
        try {
            const {data} = await axios.get("api/v1/blog/login/user")
           console.log(data);
            return data
        } catch (error) {
            if(!error.response){
                throw Error
            }
            
        }
    }
  )

export const UserDeleteBlog = createAsyncThunk(
    "user/delete/blog" ,
    async(id) =>{
        const {data} = await axios.delete(`api/v1/blog/${id}/delete`)
        return data
    }
)

const UserblogSlice = createSlice({
    name:"user/blog",
    initialState:{
        isloading:false,
        list:[],
        isError:null,
        blog:{}
      
    },
    extraReducers:(builder) =>{
        builder.addCase(getSingleblog.fulfilled , (state, action) =>{
            state.blog = action.payload
        }).addCase(loginUserblogs.pending , (state , action) =>{
            state.isloading = true
      
        }).addCase(loginUserblogs.fulfilled , (state, action) =>{
            state.isloading = false,
            state.list = action.payload.data,
            state.isError = null
        }).addCase(loginUserblogs.rejected , (state, action) =>{
            state.isloading = false,
            state.list = action.payload,
            state.isError = "something went wrong" || action.payload
        }).addCase(UserDeleteBlog.fulfilled , (state, action) =>{
            state.list.filter((blog) => blog._id !== action.payload.data._id)
        })
    }
})
export const BlogsWhichCreatedUser = ((state) => state?.loginuserblogs?.list)

export const GetSingleBlog = ((state) => state.loginuserblogs.blog.data)
export default UserblogSlice.reducer