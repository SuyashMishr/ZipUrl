import mongoose from 'mongoose';
import { generateGravatarUrl } from '../utils/helper.js';
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
        required: false,
        default: function() {
            return generateGravatarUrl(this.email);
        }
    },
    
});

const User = mongoose.model("User", userSchema);

export default User;