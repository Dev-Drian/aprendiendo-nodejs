require('dotenv').config();
const app = require('./src/app.js')
const connectDB = require('./src/config/db');
const { db } = require('./src/models/User.js');

const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
}); 