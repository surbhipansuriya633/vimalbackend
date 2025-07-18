import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});

const faqSchema = mongoose.model("Faq", Schema);
export default faqSchema;
