var orderModel = require('../models/orderModel.js');
var userModel = require('../models/User.js');
var productModel = require('../models/productModel.js');
var restaurantModel = require('../models/restaurantModel.js')

module.exports = {


  list: function(req, res) {
    orderModel.find()
      .then(orders => res.status(200).json(orders))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  show: function(req, res) {
    const id = req.params.id;
    orderModel.findById(id)
      .then(o => res.status(200).json(o))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: function(req, res) {
    console.log("esto me llega al back " )
    console.log(req.user)
    const order = new orderModel({
      restaurantId : req.body.id


  });

    order.save()
      .then(order => res.status(201).json(order))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  update: function(req, res) {

    const {productId} = req.body;
    const updates = {productId};

    orderModel.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(order => res.status(200).json(order))
    .catch(e => res.status(500).json({error:e.message}));
  }

  // remove: function(req, res) {
  //   const orderId = req.params.id;
  //   productModel.findByIdAndRemove(orderId)
  //   .then(res.status(204).json({message: 'product deleted'}))
  //   .catch(e => res.status(500).json({error:e.message}))
  // }
};
