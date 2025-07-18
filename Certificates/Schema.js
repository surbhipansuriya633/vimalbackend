import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    image: String,
});

const certificateSchema = mongoose.model("Certificate", Schema);
export default certificateSchema;