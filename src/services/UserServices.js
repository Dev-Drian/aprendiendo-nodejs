import { User } from '../models/User.js'

export const getAll = () => User.find();

export const getById = (id) => User.findById(id);

export const create = (data) => new User(data).save();

export const update = (id, data) => User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = (id) => User.findByIdAndDelete(id);
