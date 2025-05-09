import { create, getById, getAll, update, deleteUser } from "../services/UserServices.js"

export const getAllUsers = async (req, res) => {
    const users = await getAll();
    res.json(users);
}

export const getUserById = async (req, res) => {
    const user = await getById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'no encontrado' })
    res.json(user);
}

export const createUser = async (req, res) => {
    const saved = await create(req.body);
    res.status(201).json(saved);
}

export const updateUser = async (req, res) => {
    const updated = await update(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'no encontrado' });
    res.json(updated);
}

export const deleteUsers = async (req, res) => {
    const deleted = await deleteUser(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "no encontrado" });
    res.json({ msg: 'usuario eliminado' });
}