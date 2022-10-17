import mongoose from 'mongoose';
import { genRandomTagLine } from '../Utils/generateRandomTagLine';

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    tagline: {
        type: String,
        required: true,
        default: `#${genRandomTagLine()}`,
    },
    country: {
        type: String,
        required: true,
        default: 'Brasil',
    },
    birthDate: {
        type: Date,
        require: true,
    },
});

export default mongoose.model('User', User);
