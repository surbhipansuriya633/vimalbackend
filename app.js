import Connection from "./MongoDB/Connection.js";
import express from "express";
import cors from "cors";
import productRoutes from "./Product/ProductRoutes.js";
import productImageRoute from "./Product/productImageRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
Connection();

app.use("/api/products", productRoutes);
app.use('/api/upload', productImageRoute);

app.listen(8000);