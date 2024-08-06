import { Router } from 'express'
import { update, deleteOne, getAll, getById, create } from '../controllers/bookController.js'
import jwt from 'jsonwebtoken'
const { JWT_SECRET_WORD } = process.env
export const router = Router()

router.get('/', getAll)

router.get('/:id', getById)

router.post('/', validateUser, create)

router.patch('/:id', validateUser, update)

router.delete('/:id', validateUser, deleteOne)

function validateUser (req, res, next) {
  const token = req.headers?.authorization?.split(' ')[1]
  console.log(req.header.authorization)
  if (token) {
    jwt.verify(token, JWT_SECRET_WORD, (err, decoded) => {
      if (err) {
        return res.status(401).json({ succes: false, message: 'Invalid or Expired token' })
      }
      req.decoded = decoded
      next()
    })
  } else {
    res.status(401).json({ succes: false, message: 'No token provided' })
  }
}

export default router
