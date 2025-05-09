import express from 'express';
const router = express.Router();
import { getAllUsers, getUserById, createUser, updateUser, deleteUsers } from '../controllers/userController.js'

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUsers);

export default router;
