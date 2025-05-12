import jwt from 'jsonwebtoken';

export const generarToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h'});
}

export const validateUserCredencials = (token) => {
    return username === 'admin' && password === '1234';
}

