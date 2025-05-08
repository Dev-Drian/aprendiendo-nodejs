const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const notFound = require('./middlewares/notFound');

app.use(express.json());

app.use('/api/usuarios',userRoutes);

app.use(notFound)


module.exports = app;