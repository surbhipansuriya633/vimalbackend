import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    id: { type: String },
    ProductName: { type: String },
    subName: { type: String },
    proimg: { type: String },
    description: { type: String },
    image: { type: String }
});

const BrandSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, //with no space
    h1: { type: String, required: true },
    img: { type: String, required: true },
    subproducts: [Schema],
});

const Brand = mongoose.model("Brand", BrandSchema);

export default Brand;