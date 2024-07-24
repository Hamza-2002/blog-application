import { Router } from "express";
import { upload } from "../Middlewares/Mutler.js";
import {
    AdminGetAllBlogs,
    GetSingleBlog,
    createBlog,
    deleleblog,
    deleleblogOnlyForAdmin,
    getAllBlogs,
    loginUserblogs,
    updateblog
} from "../controllers/blog.controller.js";

import { AuthMiddleware } from "../Middlewares/Authmiddleware.js";
import { Admin } from "../Middlewares/AdminMiddleware.js";
const router = Router()


router.route("/create").post(AuthMiddleware,upload.single("image") ,  createBlog)
router.route("/:id/update").post(AuthMiddleware, updateblog)
router.route("/:id/delete").delete(AuthMiddleware, deleleblog)
router.route("/get").get(getAllBlogs)
router.route("/:id/single").get(AuthMiddleware , GetSingleBlog )
router.route("/login/user").get(AuthMiddleware , loginUserblogs)

// admin routes 
router.route("/admin/get").get(AuthMiddleware, Admin  , AdminGetAllBlogs)
router.route("/admin/:id/delete").delete(AuthMiddleware, Admin  , deleleblogOnlyForAdmin)

export { router }
