import mongoose from 'mongoose';
import dotenv from "dotenv/config";

dotenv

const Connection = () => {
    mongoose.connect('mongodb+srv://vaishalitank28603:vaishalitank312@cluster0.qzxy1.mongodb.net/aashutosh')
        .then(() => console.log('✅ MongoDB Connected!'))
        .catch((err) => console.error('❌ MongoDB Error:', err.message));
};

export default Connection;