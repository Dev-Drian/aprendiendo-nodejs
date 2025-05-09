export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (token !== 'secreto123') {
        return res.status(401).json({ message: 'No autorizado' });
    }

    next();
};