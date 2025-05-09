import { userSchema} from '../models/User'

const User = userSchema

exports.getAll = () => User.find();

exports.getById = (id) => User.findById(id);

exports.create = (data) => new User(data).save();

exports.update = (id, data) => User.findByIdAndUpdate(id, data, { new: true });

exports.delete = (id) => User.findByIdAndDelete(id);
