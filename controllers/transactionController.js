'use strict'
const Transaction = require('../models/Transaction.js')


class TransactionController {

  static createTransaction(req, res) {
    // return res.send('create transaction');
    let days = Number(req.body.days)

    let newTransaction = new Transaction()
    newTransaction.member = req.body.memberId;
    newTransaction.days = days;

    let dueDate= new Date();
    dueDate.setDate(dueDate.getDate()+days);

    newTransaction.due_date = dueDate;
    newTransaction.booklist = req.body.booklist;

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
      .populate('member')
      .populate('booklist')
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
      .populate('member')
      .populate('booklist')
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

    Transaction.findById(id)
      .exec()
      .then(foundTransaction => {
        if (req.body.member) {updateData.member = req.body.memberId}
        if (req.body.days) {
          updateData.days = Number(req.body.days);
          let due_date_new = new Date(foundTransaction.out_date);
          due_date_new.setDate(due_date_new.getDate()+Number(req.body.days));
          updateData.due_date = due_date_new;
        }
        // console.log(updateData);

        Transaction.findOneAndUpdate(id, updateData)
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


  static returnBooks(req, res) {
    let id = req.params.transID;
    let updateData = {};
    let inDate = new Date()
    // inDate.setDate(20)

    updateData.in_date = inDate;

    Transaction.findById(id)
      .exec()
      .then(foundTransaction => {
        // console.log(foundTransaction);
        let dateDiff = function (dateA, dateB){
          let utc1 = Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
          let utc2 = Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
          return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
        }
        // console.log(dateDiff(inDate, foundTransaction.due_date));
        let fine = 0
        let dateGap = dateDiff(inDate,foundTransaction.due_date)
        if (dateGap > 0) {
          fine = dateGap * 3000
        }

        updateData.fine = fine;
        // console.log(updateData);

        Transaction.findOneAndUpdate(id, updateData)
          .exec()
          .then(updatedTransaction => {
            res.status(200).json({
              message: 'Returned the books',
              updatedTransaction: updatedTransaction,
              updateData: updateData
            })
          })
          .catch(err => {
            res.status(500).json({
              message: err.message
            })
          })

      })
  }

}

module.exports = {
  TransactionController: TransactionController
};
