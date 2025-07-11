import express from 'express';
import { recepie } from './RecepieSchema.js';

const Recepie = express.Router()

Recepie.post("/", async (req, res) => {
    try {
        const recipe = new recepie(req.body);
        console.log(req.body);

        await recipe.save();
        res.status(201).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

Recepie.get("/", async (req, res) => {
    try {
        const recipes = await recepie.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get recipes by blogId
Recepie.get("/:blogId", async (req, res) => {
    try {
        const recipes = await recepie.find({ blogId: req.params.blogId });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default Recepie;