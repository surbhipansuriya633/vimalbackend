import Connection from "./MongoDB/Connection.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
Connection();

app.listen(8000);