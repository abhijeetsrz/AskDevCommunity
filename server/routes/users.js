import express from 'express';

import { signup, login } from '../controllers/auth.js';
import { friendAddController, friendRemoveController, getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/signup', signup)   
router.post('/login',login)
router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)
router.patch('/friendAdd/:id',auth, friendAddController)
router.patch('/friendRemove/:id',auth, friendRemoveController)


export default router