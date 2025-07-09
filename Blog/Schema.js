import mongoose from "mongoose";

const mainBlog = mongoose.Schema({
    h1: { type: String, require: true },
    type: { type: String, require: true },
    img: { type: String, require: true },
    heading: { type: String, require: true },
    description: { type: String, require: true }
})

export const Blogschema = mongoose.model("blog", mainBlog)

