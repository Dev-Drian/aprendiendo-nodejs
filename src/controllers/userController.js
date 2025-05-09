const UserService = require('../services/UserServices')

exports.getAllUsers = async (req, res) => {
    const users = await UserService.getAll();
    res.json(users);
}

exports.getUserById = async (req, res) => {
    const user = await UserService.getById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'no encontrado' })
    res.json(user);
}

exports.createUser = async (req, res) => {
    const saved = await UserService.create(req.body);
    res.status(201).json(saved);
}

exports.updateUser = async (req, res) => {
    const updated = await UserService.update(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'no encontrado' });
    res.json(updated);
}

exports.deleteUser = async(req,res) => {
    const deleted = await UserService.delete(req.params.id);
    if(!deleted) return res.status(404).json({msg:"no encontrado"});
    res.json({msg:'usuario eliminado'});
}