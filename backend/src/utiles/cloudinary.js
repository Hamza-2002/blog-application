import {v2 as cloudinary} from 'cloudinary';
import ErroHanlder from './ErrorHanlder.js';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: "dlizpuo5l", 
    api_key: "379352611147919", 
    api_secret: "DI-TT29FdyinrC4b4UgnXhTq3ic"
});

const Cloudinary  = async(filepath) =>{
    try {
        if(!filepath) return null;

        const response = await cloudinary.uploader.upload(filepath)

        if(!response){
            return next(new ErroHanlder(404 , "file not uploaded Succssfuly"))
        }

        
        return response.url

    } catch (error) {
        fs.unlinkSync(filepath)
        return null
    }
}

export {Cloudinary};