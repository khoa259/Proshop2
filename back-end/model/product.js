import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        // fileName: {
        //     type: 'String',
        //     required: true,
        // },
        productName: {
            type: 'String',
            required: true,
            trim: true,
            maxlength: 60,
        },
        productDesc: {
            type: 'String',
            trim: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productQty: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

ProductSchema.index({ productName: 'text' });
export default mongoose.model('Product', ProductSchema);