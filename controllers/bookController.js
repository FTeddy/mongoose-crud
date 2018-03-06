'use strict'
const Book = require('../models/Book.js')


class BookController {

  static createBook(req, res) {
    // return res.send('create book');
    let newBook = new Book()
    newBook.isbn = req.body.isbn;
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;
    newBook.stock = req.body.stock;

    // console.log(newBook);
    newBook.save()
      .then(createdBook => {
        res.status(201).json({
          message: 'New book created',
          createdBook: createdBook
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readBook(req, res) {
    // return res.send('read all book');
    Book.find()
      .limit(10)
      .exec()
      .then(foundBooks => {
        res.status(200).json({
          message: 'Showing Books',
          foundBooks: foundBooks
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readOneBook(req, res) {
    // return res.send('read all book');
    Book.findOne({
      _id: req.params._id
    })
      .exec()
      .then(foundBook => {
        res.status(200).json({
          message: 'Showing Books',
          foundBook: foundBook
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static updateBook(req, res) {
    // res.send('update a book');
    let id = req.params._id;
    let updateData = {}
    if (req.body.isbn) {updateData.isbn = req.body.isbn}
    if (req.body.title) {updateData.title = req.body.title}
    if (req.body.author) {updateData.author = req.body.author}
    if (req.body.category) {updateData.category = req.body.category}
    if (req.body.stock) {updateData.stock = req.body.stock}

    Book.findByIdAndUpdate(id, updateData)
      .exec()
      .then(updatedBook => {
        res.status(200).json({
          message: 'Updated Book',
          updatedBook: updatedBook,
          updateData: updateData
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static deleteBook(req, res) {
    // res.send('delete a book');
    let id = req.params._id;

    Book.deleteOne({_id: id})
      .exec()
      .then(confirm =>{
        res.status(200).json({
          message: 'Deleted Book',
          confirm: confirm
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

}

module.exports = {
  BookController: BookController
};
