import express from "express";
import Product from "./Schema.js";
const productRoutes = express.Router();

// Add new main product with subproducts
productRoutes.post("/add", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all products
productRoutes.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get product by ID
productRoutes.get("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Update main product
productRoutes.put("/update/:id", async (req, res) => {
    try {
        const updated = await Product.findOneAndUpdate(
            { id: req.params.id },
            { $set: req.body },
            { new: true },
            { recursive: true }
        );

        if (!updated) return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product updated successfully", product: updated });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update subproduct
productRoutes.put("/update/:productId/subproduct/:subId", async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.productId });
        if (!product) return res.status(404).json({ message: "Product not found" });

        const subIndex = product.subproducts.findIndex(sub => sub.id === req.params.subId);
        if (subIndex === -1) return res.status(404).json({ message: "Subproduct not found" });

        product.subproducts[subIndex] = {
            ...product.subproducts[subIndex]._doc,
            ...req.body
        };

        await product.save();

        res.json({ message: "Subproduct updated successfully", subproduct: product.subproducts[subIndex] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default productRoutes;
