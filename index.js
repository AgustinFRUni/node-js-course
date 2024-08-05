import express from 'express'
import 'dotenv/config'
import './config/mongodb.js'
import usersRouter from './routes/users.js'
const { PORT } = process.env

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// view engine setup
app.set('view engine', 'ejs')

app.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

app.use('/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
