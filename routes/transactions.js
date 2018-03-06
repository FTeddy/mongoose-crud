var express = require('express');
const TransactionController = require('../controllers/transactionController.js').TransactionController
var router = express.Router();


router.post('/add', TransactionController.createTransaction);

router.get('/', TransactionController.readTransaction);
router.get('/:_id', TransactionController.readOneTransaction);

router.put('/edit/:_id', TransactionController.updateTransaction);
router.delete('/delete/:_id', TransactionController.deleteTransaction);

// router.patch('/', TransactionController.createTransaction);


module.exports = router;
