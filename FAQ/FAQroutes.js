import express from "express";
import faqSchema from "./Schema.js";

const FaqRoute = express.Router();

// Create FAQ
FaqRoute.post("/", async (req, res) => {
    const { question, answer } = req.body;
    const faq = await faqSchema.create({ question, answer });
    res.json(faq);
});

// Get All FAQs
FaqRoute.get("/", async (req, res) => {
    const faqs = await faqSchema.find();
    res.json(faqs);
});

// Update FAQ
FaqRoute.put("/:id", async (req, res) => {
    const { question, answer } = req.body;
    const updated = await faqSchema.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
    res.json(updated);
});

// Delete FAQ
FaqRoute.delete("/:id", async (req, res) => {
    await faqSchema.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

export default FaqRoute;
