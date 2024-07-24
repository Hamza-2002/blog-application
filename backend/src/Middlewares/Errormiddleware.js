export const ErrorMiddleware = (error, req, res ,next) =>{
    error.message = error.message || "Interval Server Error"
    error.status = error.status || 500

    res.status(error.status).json({
        success:false,
        message:error.message
    })
}