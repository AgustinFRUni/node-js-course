import { Router } from 'express'
import { update, deleteOne, getAll, getById } from '../controllers/bookController'
export const router = Router()

router.get('/', getAll)

router.get('/:id', getById)

router.patch('/:id', update)

router.delete('/:id', deleteOne)
