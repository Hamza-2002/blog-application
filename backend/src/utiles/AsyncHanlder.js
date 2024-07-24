export const AsyncHanlder = (hanlder) =>{
    return (req,res,next) =>{
        Promise.resolve(hanlder(req,res,next)).catch((error) => next(error))
    }
}