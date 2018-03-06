'use strict'
const Transaction = require('../models/Transaction.js')


class TransactionController {

  static createTransaction(req, res) {
    // return res.send('create transaction');
    let days = Number(req.body.days)

    let newTransaction = new Transaction()
    newTransaction.member = req.body.memberId;
    newTransaction.days = days;
    newTransaction.due_date = +new Date()+days*24*60*60*1000

    // console.log(newTransaction);
    newTransaction.save()
      .then(createdTransaction => {
        res.status(201).json({
          message: 'New transaction created',
          createdTransaction: createdTransaction
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readTransaction(req, res) {
    // return res.send('read all transaction');
    Transaction.find()
      .limit(10)
      // .populate('Costumer')
      .exec()
      .then(foundTransactions => {
        res.status(200).json({
          message: 'Showing Transactions',
          foundTransactions: foundTransactions
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readOneTransaction(req, res) {
    // return res.send('read all transaction');
    Transaction.findOne({
      _id: req.params._id
    })
      .exec()
      .then(foundTransaction => {
        res.status(200).json({
          message: 'Showing Transactions',
          foundTransaction: foundTransaction
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static updateTransaction(req, res) {
    // res.send('update a transaction');
    let id = req.params._id;
    let updateData = {}
    if (req.body.member) {updateData.member = req.body.memberId}
    if (req.body.days) {updateData.days = req.body.days}
    if (req.body.due_date) {updateData.due_date = req.body.due_date}

    Transaction.findByIdAndUpdate(id, updateData)
      .exec()
      .then(updatedTransaction => {
        res.status(200).json({
          message: 'Updated Transaction',
          updatedTransaction: updatedTransaction,
          updateData: updateData
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static deleteTransaction(req, res) {
    // res.send('delete a transaction');
    let id = req.params._id;

    Transaction.deleteOne({_id: id})
      .exec()
      .then(confirm =>{
        res.status(200).json({
          message: 'Deleted Transaction',
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
  TransactionController: TransactionController
};
