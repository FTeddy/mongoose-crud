'use strict'
const Costumer = require('../models/Costumer.js')



class CostumerController {

  static createCostumer(req, res) {
    // return res.send('create costumer');
    let newCostumer = new Costumer()
    newCostumer.name = req.body.name;
    newCostumer.memberId = req.body.memberId;
    newCostumer.address = req.body.address;
    newCostumer.zipcode = req.body.zipcode;
    newCostumer.phone = req.body.phone;

    // console.log(newCostumer);
    newCostumer.save()
      .then(createdCostumer => {
        res.status(201).json({
          message: 'New costumer created',
          createdCostumer: createdCostumer
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readCostumer(req, res) {
    // return res.send('read all costumer');
    Costumer.find()
      .limit(10)
      .exec()
      .then(foundCostumers => {
        res.status(200).json({
          message: 'Showing Costumers',
          foundCostumers: foundCostumers
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static readOneCostumer(req, res) {
    // return res.send('read all costumer');
    Costumer.findOne({
      _id: req.params._id
    })
      .exec()
      .then(foundCostumer => {
        res.status(200).json({
          message: 'Showing Costumers',
          foundCostumer: foundCostumer
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })
  }

  static updateCostumer(req, res) {
    // res.send('update a costumer');
    let id = req.params._id;
    let updateData = {}
    if (req.body.name) {updateData.name = req.body.name}
    if (req.body.memberId) {updateData.memberId = req.body.memberId}
    if (req.body.address) {updateData.address = req.body.address}
    if (req.body.zipcode) {updateData.zipcode = req.body.zipcode}
    if (req.body.phone) {updateData.phone = req.body.phone}

    Costumer.findByIdAndUpdate(id, updateData)
      .exec()
      .then(updatedCostumer => {
        res.status(200).json({
          message: 'Updated Costumer',
          updatedCostumer: updatedCostumer,
          updateData: updateData
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message
        })
      })

  }

  static deleteCostumer(req, res) {
    // res.send('delete a costumer');
    let id = req.params._id;

    Costumer.deleteOne({_id: id})
      .exec()
      .then(confirm =>{
        res.status(200).json({
          message: 'Deleted Costumer',
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
  CostumerController: CostumerController
};
