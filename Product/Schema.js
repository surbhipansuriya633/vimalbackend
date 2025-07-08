import mongoose from "mongoose";

const subproductSchema = new mongoose.Schema({
    id: String,
    ProductName: String,
    subName: String,
    proimg: String,
    description: String
});

const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    h1: String,
    mainLine: String,
    img: String,
    subproducts: [subproductSchema],
});

const Product = mongoose.model("Product", productSchema);

export default Product;