import Product from '../model/product.js'
export const list = async (req, res) => {
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(404).json({
            message: "Khong lay duoc list products"
        })
    }
};
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: "Them Khong Thanh Cong"
        })
    }
};
export const read = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: "Khong Thay San Pham Nao"
        })
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: "Khong Xoa Duoc San Pham"
        })
    }
};
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate({ _id: req.params.id },req.body,{new:true}).exec();
        res.json(product);
    } catch (error) {
        res.status(404).json({
            message: "Khong Cap Nhat Duoc San Pham"
        })
    }
};