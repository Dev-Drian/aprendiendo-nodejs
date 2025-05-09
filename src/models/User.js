const mongoose = require('mongoose');


export const userSchema = new mongoose.Schema({
    name: { type: String, require: true, },
    client: { type: String, require: true }
});

