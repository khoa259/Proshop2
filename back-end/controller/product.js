import Product from '../model/product.js';
import fs from 'fs';

export const create = async (req, res) => {
    // const { filename } = req.file;
    const {
        productName,
        productDesc,
        productPrice,
        productQty,
    } = req.body;

    try {
        let product = new Product();
        // product.fileName = filename;
        product.productName = productName;
        product.productDesc = productDesc;
        product.productPrice = productPrice;
        product.productQty = productQty;

        await product.save();

        res.json({
            successMessage: `${productName} was created`,
            product,
        });
    } catch (err) {
        console.log(err, 'productController.create error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};

export const readAll = async (req, res) => {
    try {
        const products = await Product.find({}).exec();

        res.json({ products });
    } catch (err) {
        console.log(err, 'productController.readAll error');
        res.status(500).json({
            errorMessage: 'Please try again later',
        });
    }
};


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
    const productId = req.params.productId;

    if (req.file !== undefined) {
        req.body.fileName = req.file.filename;
    }

    const oldProduct = await Product.findByIdAndUpdate(productId, req.body);

    if (req.file !== undefined && req.file.filename !== oldProduct.fileName) {
        fs.unlink(`uploads/${oldProduct.fileName}`, err => {
            if (err) throw err;
            console.log('Image deleted from the filesystem');
        });
    }

    res.json({
        successMessage: 'Product successfully updated',
    });
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