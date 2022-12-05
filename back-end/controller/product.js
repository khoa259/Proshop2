import Product from '../model/product.js';
import fs from 'fs';
import cloudinary from "cloudinary";
import { config } from "dotenv";
config({ path: process.ENV })

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

export const create = async (req, res) => {
    const {
        productName,
        productDesc,
        productPrice,
        productQty,
        productFile,
        category,
    } = req.body;
    try {
        // if(!req.files || Object.keys(req.files).length === 0)
        //     return res.status(400).json({msg: 'No files were uploaded.'})
        
        const file = req.files.file;
        // if(file.size > 1024*1024) {
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({msg: "Size too large"})
        // }

        // if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({msg: "File format is incorrect."})
        // }
    
        const {url} = await cloudinary.v2.uploader.upload(file.tempFilePath,{folder:"test"}, async(err, result)=>{
            if(err) throw err;

            removeTmp(file.tempFilePath)

            res.json({public_id: result.public_id, url: result.secure_url})
            
        })
        let product = new Product();
        product.fileName = productFile;
        product.category = category;
        product.productName = productName;
        product.productDesc = productDesc;
        product.productPrice = productPrice;
        product.productQty = productQty;
        product.file = url;
        if (product) {
             product.save().then((res) => console.log(res)).catch((err) => console.log(err));
        }
    } catch (err) {
        console.log(err, 'productController.create error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};

export const list = async (req, res) => {
  try {
    const search = req.query.search;
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const skip =   limit * (page - 1) ;
    const sort =  req.query.sort || '-createdAt' ;
    if (search) {
        const products = await Product.find({productName: {$regex: search, $options: '$i'}}).sort(sort).limit(limit).skip(skip).exec();
        const count = products.length;
        res.json({products,count});
        return
    }
    if ( page || skip || sort) {
        const products = await Product.find().sort(sort).limit(limit).skip(skip).exec();
        const total =  await Product.find().exec();
        const count = total.length;
        res.json({products,count});
        return
    }
    else{
        const products = await Product.find().exec();
        const count = await products.length;
        res.json({products,count});
        // const result = await Promise.allSettled([
		// 	Product.countDocuments()
		// ])
		// const count = await result[0] ? result[0].value : 0;
		// console.log(count);
		// res.json({products,count});
    }
  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
}


export const read = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        res.json(product);
    } catch (err) {
        console.log(err, 'productController.read error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};

export const update = async (req, res) => {
    const condition = { _id: req.params.productId }
	const update = req.body;
    console.log(req.body.file)
    try {
		const product = await Product.findOneAndUpdate(condition, update).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Xóa sản phẩm không thành công"
		})
	}
    // const productId = req.params.productId;

    // if (req.file !== undefined) {
    //     req.body.fileName = req.file.filename;
    // }

    // const oldProduct = await Product.findByIdAndUpdate(productId, req.body);

    // if (req.file !== undefined && req.file.filename !== oldProduct.fileName) {
    //     fs.unlink(`uploads/${oldProduct.fileName}`, err => {
    //         if (err) throw err;
    //         console.log('Image deleted from the filesystem');
    //     });
    // }

    // res.json({
    //     successMessage: 'Product successfully updated',
    // });
};

export const remove = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletedProduct = await Product.findByIdAndDelete(productId);

        // fs.unlink(`uploads/${deletedProduct.fileName}`, err => {
        //     if (err) throw err;
        //     console.log(
        //         'Image successfully deleted from filesystem: ',
        //         deletedProduct.fileName
        //     );
        // });

        res.json(deletedProduct);
    } catch (err) {
        console.log(err, 'productController.delete error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};

export const deleteManyUser = async(req, res) => {
    try {
        const response = await Product.deleteMany({_id:  req.query.id})
        res.status(200).json({
            data: response,
            status: 'OK'
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
            status: 'err'
        })
    }
}