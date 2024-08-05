import { mongoose } from 'mongoose'

const BookSchema = mongoose.Schema({
  title: String,
  isb: String,
  category: String,
  price: Number,
  authorName: String,
  yearOfRelease: Number,
  sinopsis: String
})

export default mongoose.model('Book', BookSchema)
