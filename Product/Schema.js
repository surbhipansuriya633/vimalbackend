import mongoose from "mongoose";

const subproductSchema = new mongoose.Schema({
    id: { type: String },
    ProductName: { type: String },
    subName: { type: String },
    proimg: { type: String },
    description: { type: String }
});

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    h1: { type: String, required: true },
    mainLine: { type: String, required: true },
    img: { type: String, required: true },
    subproducts: [subproductSchema],
});

const Product = mongoose.model("Product", productSchema);

export default Product;