import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllcomments = createAsyncThunk(
    "getAll/comments",
    async(_ , {rejectWithValue}) =>{
        const {data}= await axios.get("/api/v1/comment/admin/get")
        console.log("data",data);
        return data
    }
)

export const deleteComment = createAsyncThunk(
    "delete/comment",
    async( id, {rejectWithValue}) =>{
        const {data} = await axios.delete(`/api/v1/comment/admin/${id}/delete`)
        return data
    }
)

const GetAllCommentSlice = createSlice({
    name:"get/all/comments",
    initialState:{
        loading:false,
        list:[],
        error:null
    },
    extraReducers:(builder) =>{
        builder.addCase(GetAllcomments.pending, (state, action) =>{
            state.loading = true
        }).addCase(GetAllcomments.fulfilled , (state, action) =>{
            state.loading = false,
            state.list = action.payload,
            state.error = null
        }).addCase(GetAllcomments.rejected , (state , action) =>{
            state.loading = false,
            state.error = action.payload
        }).addCase(deleteComment.fulfilled , (state, action) =>{
            state.list = state.list?.data?.filter((comment) => comment._id !== action.payload?.data?._id)
        })
    }
})


export const AllAdminComments = ((state) => state.getallcomments?.list?.data)
export const Status = ((state) => state.getallcomments?.loading)
export const error = ((state) => state.getallcomments?.error)
export default GetAllCommentSlice.reducer
