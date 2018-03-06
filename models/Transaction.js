const mongoose = require('mongoose');
const Schema = mongoose.Schema

const TransactionSchema = new Schema ({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Costumer'
  },
  days: Number,
  out_date: {
    type: Date,
    default: Date.now
  },
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Transaction', TransactionSchema);
