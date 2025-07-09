import Connection from "./MongoDB/Connection.js";
import express from "express";
import cors from "cors";
import productRoutes from "./Product/ProductRoutes.js";
import productImageRoute from "./Product/productImageRoute.js";
import AddBlog from "./Blog/addBlog.js";
import Recepie from "./Blog/Recepie.js";
import brandRoutes from "./Brand/brandRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
Connection();

app.use("/api/products", productRoutes);
app.use('/api/upload', productImageRoute);

app.use('/api/blog', AddBlog);
app.use('/recepie/add', Recepie);


app.use('/brand/add', brandRoutes);
// app.use('/recepie/add', Recepie);


app.listen(8000);