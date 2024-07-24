import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";




export const blogdata =  createAsyncThunk(
    "blog/getallblog",
    async() =>{
        const {data} = await axios.get("/api/v1/blog/get")
        return data
    }
)

export const DeleteBlogByAdmin = createAsyncThunk(
    "blog/delete",
    async(id) =>{
        const {data} = await axios.delete(`api/v1/blog/admin/${id}/delete`)
        return data
    }
)



const blogSlice = createSlice({
    name:"blog",
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
            state.list = action.payload.data,
            state.isError = ""
        }).addCase(blogdata.rejected , (state, action) =>{
            state.isloading = false,
            state.list = null,
            state.isError = "something went wrong" || action.payload
        }).addCase(DeleteBlogByAdmin.fulfilled, (state, action) =>{
            state.list = state.list.filter((blog) => blog._id !== action.payload.data._id);
        })
    }
})

export const isloading = ((state) =>  state.blogs.isloading)
export const iserror = ((state) => state.blogs.isError)
export const Allblogdata = ((state) => state.blogs.list)



export default blogSlice.reducer;