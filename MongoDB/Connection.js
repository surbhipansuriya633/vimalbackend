import mongoose from 'mongoose';
import dotenv from "dotenv/config";

dotenv

const Connection = () => {
    mongoose.connect('mongodb://localhost:27017/vimal')
        .then(() => console.log('✅ MongoDB Connected!'))
        .catch((err) => console.error('❌ MongoDB Error:', err.message));
};

export default Connection;