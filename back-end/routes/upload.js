import { Router } from "express";
// import multer from "multer";
import cloudinary from "cloudinary";
import fs from 'fs';
import { config } from "dotenv";
config({ path: process.ENV })
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})
const router = Router();
const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}
router.post('/',(req, res) =>{
    console.log(req.files.file)
    try {
        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({msg: 'No files were uploaded.'})
        
        const file = req.files.file;
        if(file.size > 1024*1024) {
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Size too large"})
        }

        if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "File format is incorrect."})
        }
    
        cloudinary.v2.uploader.upload(file.tempFilePath,{folder:"test"}, async(err, result)=>{
            if(err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
            
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})

export default router