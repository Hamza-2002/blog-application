import express from 'express'
const app = express()
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'


app.use(cookieParser())
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// get user Routes

import UserRoutes from './routes/user.routes.js'
app.use("/api/v1/user" ,UserRoutes)

// get blogs 

import { router } from './routes/blog.routes.js'
app.use("/api/v1/blog" , router)

// comments route

import CommentRouter from './routes/comment.routes.js'
app.use("/api/v1/comment" , CommentRouter)
export {app};
