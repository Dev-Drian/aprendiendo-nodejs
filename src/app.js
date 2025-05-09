
import express from 'express';
const app = express();
import router from './routes/UsersRoutes.js'
import notFound from './middlewares/notFound.js'
import { logger } from './middlewares/logger.js'
import { authMiddleware } from './middlewares/auth.js'




app.use(express.json());
app.use(logger, authMiddleware)

app.use('/api/usuarios', router);

app.use(notFound)


export default app;