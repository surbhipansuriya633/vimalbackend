import express from "express";
import multer from "multer";
import cloudinary from "../cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import certificateSchema from "./Schema.js";

const CertificatesRoutes = express.Router();

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'certificates',
        allowed_formats: ['jpg', 'jpeg', 'png'],
    },
});

const upload = multer({ storage });

// CREATE
CertificatesRoutes.post("/", upload.single("image"), async (req, res) => {
    const { title, description } = req.body;
    const image = req.file.path;
    const cert = await certificateSchema.create({ title, description, image });
    res.json(cert);
});

// GET ALL
CertificatesRoutes.get("/", async (req, res) => {
    const data = await certificateSchema.find();
    res.json(data);
});

// UPDATE
CertificatesRoutes.put("/:id", upload.single("image"), async (req, res) => {
    const { title, description } = req.body;
    const updateData = { title, description };
    if (req.file) updateData.image = req.file.path;
    const updated = await certificateSchema.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updated);
});

// DELETE
CertificatesRoutes.delete("/:id", async (req, res) => {
    await certificateSchema.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
});

export default CertificatesRoutes;
