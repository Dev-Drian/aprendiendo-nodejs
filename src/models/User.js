import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    client: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);

