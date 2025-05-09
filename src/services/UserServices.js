import { userSchema} from '../models/User.js'

const User = userSchema

export const getAll = () => User.find();

export const getById = (id) => User.findById(id);

export const create = (data) => new User(data).save();

export const update = (id, data) => User.findByIdAndUpdate(id, data, { new: true });

export const deleteUser = (id) => User.findByIdAndDelete(id);
