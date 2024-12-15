
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
    },
    authLevel: {
        type: Number,
        default: 1,
    },
});

export default model("user", userSchema);