import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import { toast } from "react-toastify"




export const logoutuser =  createAsyncThunk(
    "logout/user",
    () =>{
        axios.post("api/v1/user/logout").then(()=>{
            toast.success("user logout Successfuly")
        })
    }
)

export const loginUser = createAsyncThunk(
  "login/user",
   async(userDetails ,{rejectWithValue}) =>{
   try {
     const {data} = await axios.post("api/v1/user/login" , userDetails)
     toast.success(data?.message)
    
     return data
   } catch (error) {
    if (!error.response) {
      // Network error
      throw error
   }
   return rejectWithValue(error.response.data)
  }
})




const loginSlice = createSlice({
  name: 'user',
  initialState: {
    list:{},
    isLogin:false,
    isAdmin:false,
    isloading :false,
    error:null
    
  },
  extraReducers:(builder)=>{
    builder.addCase(logoutuser.fulfilled , (state , action) =>{
      state.isLogin = false,
      state.Userblogs = [],
      state.list = null
    }).addCase(loginUser.fulfilled , (state , action) =>{
      
      state.isLogin = true,
      state.list = action.payload,
      console.log(action.payload)
      state.isloading = false
      state.list?.data.user.role === "admin" ? state.isAdmin = true : state.isAdmin = false
     
      
    }).addCase(loginUser.pending , (state, action) =>{
      state.isloading = true
    }).addCase(loginUser.rejected , (state, action) =>{
      state.isloading = false,
      state.list = null,
      state.error = action.payload || "something went wrong"
    })
  }
})
export const islogin = ((state)=> state.loginuser.isLogin)

export const loginUserData = ((state) => state.loginuser.list)
export const iserror = ((state) => state.loginuser.error)
export const isadmin = ((state) => state.loginuser.isAdmin)


export const {Userlogin} = loginSlice.actions;

export default loginSlice.reducer