import express from 'express'
import { login, save } from '../controllers/userController.js'
var router = express.Router()

router.post('/register',
  save
)

router.post('/login', login)

export default router
