import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const GetComments = createAsyncThunk(
    "get/comment",
    async(id)=>{
        
        const {data} = await axios.get(`/api/v1/comment/get/${id}`)
        
        return data 
    }
)

const commentSlice = createSlice({
    name:"comment",
    initialState:{
        list:[],
        loading:false,
        error:null
    },
    extraReducers:(builder) =>{
        builder.addCase(GetComments.pending, (state, action) =>{
            state.loading = true
        }).addCase(GetComments.fulfilled , (state, action) =>{
            state.loading = false,
            state.list = action.payload
        }).addCase(GetComments.rejected , (state, action) =>{
            state.loading = false,
            state.list = null,
            state.error = action.payload
        })
        
        
    }
})

export const GetAllComment = ((state) => state.comments?.list?.data)

export default commentSlice.reducer;