import bookModel from '../models/bookModel'

export const getAll = async function (req, res, next) {
  try {
    const documents = await bookModel.find()
    res.json(documents)
  } catch (e) {
    console.log(e)
  }
}

export const getById = async function (req, res, next) {
  try {
    const document = await bookModel.findById(req.params.id)
    res.json(document)
  } catch (e) {
    console.log(e)
  }
}

export const update = async function (req, res, next) {
  try {
    const update = await bookModel.updateOne({ _id: req.params.id}, req.body)
    res.json(update)
  } catch (e) {
    console.log(e)
  }
}

export const deleteOne = async function (req, res, next) {
  try {
    const deleteResponse = await bookModel.deleteOne({ _id: req.params.id})
    res.json(deleteResponse)
  } catch (e) {
    console.log(e)
  }
}
