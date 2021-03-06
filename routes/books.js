var express = require('express');
const BookController = require('../controllers/bookController.js').BookController
var router = express.Router();


router.post('/add', BookController.createBook);

router.get('/library', BookController.readBook);
router.get('/library/:_id', BookController.readOneBook);

router.put('/edit/:_id', BookController.updateBook);
router.delete('/delete/:_id', BookController.deleteBook);

module.exports = router;
