const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CostumerSchema = new Schema ({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Costumer', CostumerSchema);
