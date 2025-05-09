
import express from 'express';
const app = express();
import router from './routes/UsersRoutes.js'
import notFound from './middlewares/notFound.js'




app.use(express.json());

app.use('/api/usuarios', router);

app.use(notFound)


export default app;