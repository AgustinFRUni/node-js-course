import BookModel from '../models/bookModel.js'

export const getAll = async function (req, res, next) {
  try {
    const documents = await BookModel.find()
    res.json(documents)
  } catch (e) {
    console.log(e)
  }
}

export const getById = async function (req, res, next) {
  try {
    const document = await BookModel.findById(req.params.id)
    res.json(document)
  } catch (e) {
    console.log(e)
  }
}

export const create = async function (req, res, next) {
  try {
    const document = new BookModel({
      title: req.body.title,
      isbn: req.body.isbn,
      category: req.body.category,
      price: req.body.price,
      authorName: req.body.authorName,
      yearOfRelease: req.body.yearOfRelease,
      sinopsis: req.body.sinopsis
    })
    const book = await document.save()
    res.json(book)
  } catch (e) {
    console.log(e)
  }
}

export const update = async function (req, res, next) {
  try {
    const update = await BookModel.updateOne({ _id: req.params.id }, req.body)
    res.json(update)
  } catch (e) {
    console.log(e)
  }
}

export const deleteOne = async function (req, res, next) {
  try {
    const deleteResponse = await BookModel.deleteOne({ _id: req.params.id })
    res.json(deleteResponse)
  } catch (e) {
    console.log(e)
  }
}
