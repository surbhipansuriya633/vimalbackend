import express from "express";
import testimonial from "./Schema.js";

const testimonialRoute = express.Router();

// ✅ POST Create (image URL comes from frontend)
testimonialRoute.post("/", async (req, res) => {
    const { name, review, image } = req.body;
    const data = await testimonial.create({ name, review, image });
    res.json(data);
});

// ✅ GET All
testimonialRoute.get("/", async (req, res) => {
    const data = await testimonial.find();
    res.json(data);
});

// ✅ PUT Update
testimonialRoute.put("/:id", async (req, res) => {
    const { name, review, image } = req.body;
    const updated = await testimonial.findByIdAndUpdate(
        req.params.id,
        { name, review, image },
        { new: true }
    );
    res.json(updated);
});

// ✅ DELETE
testimonialRoute.delete("/:id", async (req, res) => {
    await testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

export default testimonialRoute;