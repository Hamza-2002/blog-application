import { Router } from "express";
import {
    LoginUser,
    RegisterUser,
    LogoutUser,
    GetSingleUser,
    GetAllUsers,
    covertUserToAdmin,
    DeleteUser,
    updateUser,
    ForgetPassword,
    ResetPassword
}
    from "../controllers/user.controller.js";
import { AuthMiddleware } from "../Middlewares/Authmiddleware.js";
import { Admin } from "../Middlewares/AdminMiddleware.js";

const router = Router()


router.route("/register").post(RegisterUser)
router.route("/login").post(LoginUser)
router.route("/logout").post(AuthMiddleware, LogoutUser)
router.route("/update").post(AuthMiddleware , updateUser)
router.route("/get").get(AuthMiddleware, GetSingleUser)
router.route("/forgetpassword").post(AuthMiddleware, ForgetPassword)
router.route("/:id/resetpassword").post(AuthMiddleware, ResetPassword)

// admin routes 
router.route("/get/all").get(AuthMiddleware, Admin, GetAllUsers)
router.route("/:id").post(AuthMiddleware, Admin, covertUserToAdmin)
router.route('/:id').delete(AuthMiddleware , Admin , DeleteUser)

export default router