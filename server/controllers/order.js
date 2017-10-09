const userModel = require('../models/User')
const orderModel = require('../models/order')
const productModel = require('../models/product')
const restaurantModel = require('../models/restaurant')

module.exports = {

  list: (req, res) => {
    orderModel.find()
      .then(orders => res.status(200).json(orders))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  show: (req, res) => {
    const id = req.params.id
    console.log("id en el back ")
    console.log(id)
    orderModel.findById(id)

      .then(o => {
        res.status(200).json(o)
        console.log(o)
      })
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: (req, res) => {
    console.log("esto me llega al back ")
    console.log(req.body)
    const order = new orderModel({
      productId: req.body
    })

    order.save()
      .then(order => res.status(201).json(order))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  update: function(req, res) {

    const {
      productId
    } = req.body
    const updates = {
      productId
    }

    orderModel.findByIdAndUpdate(req.params.id, updates, {
        new: true
      })
      .then(order => res.status(200).json(order))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}