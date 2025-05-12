import express from 'express';
import { login } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/auth.js';

const authRoutes = express.Router();

authRoutes.post('/login', login);

// Ruta protegida de ejemplo
authRoutes.get('/privado', authMiddleware, (req, res) => {
    res.json({ mensaje: 'Acceso concedido', user: req.user });
});

export default authRoutes;
