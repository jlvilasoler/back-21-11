import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = "products";

const productSchema = new mongoose.Schema( {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    thumbnail: { type: String },
    code: { type: Number },
    stock: { type: Number },
    status: { type: String },
    category: { type: String }
});

productSchema.plugin(mongoosePaginate);
const productModel = mongoose.model(productCollection, productSchema);
export default productModel;