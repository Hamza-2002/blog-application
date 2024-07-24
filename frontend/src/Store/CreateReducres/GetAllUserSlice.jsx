import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllUsers = createAsyncThunk(
    'Users/All',
    async() =>{
        const respnose = axios.get('api/v1/user/get/all')
     
        return respnose
    }
)
export const DeleteSingleUser = createAsyncThunk(
    "User/delete",
    async(id) =>{
        const response = axios.delete(`/api/v1/user/${id}`)
        return response
    }
)

export const ConvertUserToAdmin = createAsyncThunk(
    "user/admin",
    async(id) =>{
        const response = axios.post(`/api/v1/user/${id}`)
        return response
    }
)

const findItemIndex = (state ,action) =>{
    return  state.findIndex(({data}) => data.user._id == action.payload.data.user._id)
}

const GetAllUserSlice = createSlice({
    'name':"Users",
    initialState:{
        isloading:false,
        list:[],
        isError:""
    },
    extraReducers:(builder) =>{
        builder.addCase(GetAllUsers.pending , (state, action) =>{
            state.isloading = true,
            state.list = null
        }).addCase(GetAllUsers.fulfilled , (state, action) =>{
            state.isloading = false,
            state.list = action.payload.data,
            state.isError = null
        }).addCase(GetAllUsers.rejected, (state, action) =>{
            state.isloading = false,
            state.list = null,
            state.isError = action.payload || "something Went Wrong"
        }).addCase(DeleteSingleUser.fulfilled , (state, action) =>{
            state.list.splice(findItemIndex ,1)
        }).addCase(ConvertUserToAdmin.fulfilled, (state, action) =>{
            const index = findItemIndex(state, action)
            state.list[index].role === "admin"
        })
    }
})

export const AllUsers = (state) => state.Allusers.list

export default GetAllUserSlice.reducer;