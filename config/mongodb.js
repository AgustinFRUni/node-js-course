// Mongo db atlas connection
import mongoose from 'mongoose'

// Since V6 no longer necessary
// const options = {
//  maxPoolSize: 100,
//  useNewUrlParser: true,
//  useUnifiedTopology: true
// }

const { CONNECTION_STRING } = process.env
mongoose.connect(CONNECTION_STRING)
