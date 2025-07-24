import Connection from "./MongoDB/Connection.js";
import express from "express";
import cors from "cors";
import productRoutes from "./Product/ProductRoutes.js";
import productImageRoute from "./Product/productImageRoute.js";

import Recepie from "./Blog/Recepie.js";
import brandRoutes from "./Brand/brandRoutes.js";
import testimonialRoute from "./Testimonial/testimonialRoute.js";
import FaqRoute from "./FAQ/FAQroutes.js";
import CertificatesRoutes from "./Certificates/CertificatesRoutes.js";
import AddBlog from "./Blog/AddBlog.js";

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

app.use("/api/testimonial", testimonialRoute);

app.use("/api/faqs", FaqRoute);

app.use("/api/certificates", CertificatesRoutes);

app.listen(8000);