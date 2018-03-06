'use strict'


class BookController {

  static createBook(req, res) {
    return res.send('create book');

  }

  static readBook(req, res) {
    return res.send('read all book');

  }

  static readOneBook(req, res) {
    return res.send('read all book');

  }

  static updateBook(req, res) {
    res.send('update a book');


  }

  static deleteBook(req, res) {
    res.send('delete a book');

  }

}

module.exports = {
  BookController: BookController
};
