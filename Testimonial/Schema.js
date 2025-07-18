import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: String,
    review: String,
    image: String,
});

const testimonial = mongoose.model("Testimonial", Schema);
export default testimonial;