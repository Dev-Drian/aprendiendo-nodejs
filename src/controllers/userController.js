const User = require('../models/User')

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

exports.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'no encontrado' })
    res.json(user);
}

exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
}

exports.updateUser = async (req, res) => {
    const updated = await User.findByIdAndUpdate(, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: 'no encontrado' });
    res.json(updated);
}

exports.deleteUser = async(req,res) => {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if(!deleted) return res.status(404).json({msg:"no encontrado"});
    res.json({msg:'usuario eliminado'});
}