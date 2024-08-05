// userController.js

// Importa los módulos necesarios
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// Destructura la palabra secreta del JWT del proceso de entorno
const { JWT_SECRET_WORD } = process.env

// Define las funciones del controlador
export const save = async (req, res, next) => {
  const { username, password } = req.body
  const data = await userModel.create({ username: username, password: password })
  res.json({ status: 'success', message: 'User added successfully!', data: data })
}

export const login = async (req, res, next) => {
  const user = await userModel.findOne({ username: req.body.username })
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET_WORD, { expiresIn: '1h' })
      res.json({ status: 'success', message: 'User found!', data: { user: user, token: token } })
    } else {
      res.json({ status: 'error', message: 'Invalid user/password!', data: null })
    }
  } else {
    res.json({ status: 'not_found', message: 'User not found!', data: null })
  }
}
