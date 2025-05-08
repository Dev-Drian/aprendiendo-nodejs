const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexion exitosa ');
    } catch (error) {
        console.error('Se exploto', error);
    }
}

module.exports = connectDB;