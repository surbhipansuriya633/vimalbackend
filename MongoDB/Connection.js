import mongoose from 'mongoose';

const Connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/vimal')
        .then(() => console.log('Connected!'));
}

export default Connection;