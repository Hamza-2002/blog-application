import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const adminblogsdata =  createAsyncThunk(
    "admin/blog/getallblog",
    async() =>{
        const {data} = await axios.get("/api/v1/blog/admin/get")
        return data
    }
)

const AdminblogSlice = createSlice({
    name:"Adminblog",
    initialState:{
        isloading:false,
        list:[],
        isError:""
    },
    extraReducers:(builder) =>{
        builder.addCase(blogdata.pending , (state , action) =>{
            state.isloading = true

        }).addCase(blogdata.fulfilled , (state, action) =>{
            state.isloading = false,
            state.list = action.payload,
            state.isError = ""
        }).addCase(blogdata.rejected , (state, action) =>{
            state.isloading = false,
            state.list = null,
            state.isError = "something went wrong" || action.payload
        })
    }
})