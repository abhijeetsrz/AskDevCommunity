import express from 'express'

import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from '../middleware/auth.js'

const router = express.Router();

//patch is used to update certain record in database
//here id is the id of particular question number

router.patch('/post/:id', auth, postAnswer)
router.patch('/delete/:id',auth, deleteAnswer)

export default router
