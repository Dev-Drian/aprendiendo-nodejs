import { generarToken, validateUserCredencials } from "../services/authServices.js";


export const login = () => {
    const { username, password } = req.body;

    if (validateUserCredencials(username, password)) {
        const token = generarToken(username);
        return res.json({ token });
    }
    res.status(401).json({ message: 'no se encontro este usuario' });

}