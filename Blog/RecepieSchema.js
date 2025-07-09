import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
    title: { type: String }, // e.g., "Roasted Berry Ketchup"
    extrapoints: [String]
});

const recipeSchema = new mongoose.Schema({
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
    h1: { type: String, require: true },
    type: { type: String, require: true },
    heading: { type: String, require: true },
    img: { type: String, require: true },
    description: { type: String, require: true },
    ingredients: [{ type: String, require: true }],
    steps: [{ type: String, require: true }],
    sections: [sectionSchema] 
});


export const recepie = mongoose.model("recepie", recipeSchema)

