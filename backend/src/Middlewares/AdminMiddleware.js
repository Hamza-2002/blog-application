import { AsyncHanlder } from "../utiles/AsyncHanlder.js";
import ErroHanlder from "../utiles/ErrorHanlder.js";

export const Admin = AsyncHanlder(async(req,res,next) =>{
    if (req.user.role !== 'admin') {
        
        return next(new ErroHanlder(403, 'Access denied. Admins only.'))
    }
    next()

})