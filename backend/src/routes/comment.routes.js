import { Router } from "express";
const CommentRouter = Router()
import {
    GetAllComments,
    GetAllCommentsByUser,
    GetSingleComment,
    deleteCommentOnlyAdmin,
    deleteCommentOnlyUser,
    postcomments
} from "../controllers/comment.controller.js";
import { AuthMiddleware } from "../Middlewares/Authmiddleware.js";
import { Admin } from "../Middlewares/AdminMiddleware.js";


CommentRouter.route("/post").post(AuthMiddleware, postcomments)
CommentRouter.route("/get/:id").get(AuthMiddleware , GetAllCommentsByUser)
CommentRouter.route("/:id").get(AuthMiddleware , GetSingleComment)
CommentRouter.route("/:id/delete").delete(AuthMiddleware, deleteCommentOnlyUser)

// admin routes

CommentRouter.route("/admin/get").get(AuthMiddleware, Admin, GetAllComments)
CommentRouter.route("/admin/:id/delete").delete(AuthMiddleware, Admin, deleteCommentOnlyAdmin)

export default CommentRouter;