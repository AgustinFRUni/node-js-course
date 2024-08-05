import { Router } from 'express'
import { update, deleteOne, getAll, getById } from '../controllers/bookController'
import { verify } from 'jsonwebtoken'
const { JWT_SECRET_WORD } = process.env
export const router = Router()

router.get('/', getAll)

router.get('/:id', getById)

router.patch('/:id', validateUser, update)

router.delete('/:id', validateUser, deleteOne)

function validateUser (req, res, next) {
  const token = req.header?.authorization?.split(' ')[1]
  if (token) {
    verify(token, JWT_SECRET_WORD, (err, decoded) => {
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
