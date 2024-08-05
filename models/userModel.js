import { mongoose } from 'mongoose'
import bcrypt from 'bcrypt'
const { SALT_ROUNDS } = process.env

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
})

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

export default mongoose.model('User', UserSchema)
