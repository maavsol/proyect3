var orderModel = require('../models/orderModel.js');

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
    const order = new orderModel({
      date: req.body.date,
      productId: req.body.productId,
      userId: req.body.userId
  });

    order.save()
      .then(order => res.status(201).json({
        message: 'new order added',
        order: order
      }))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  update: function(req, res) {

    const {date, productId, userId} = req.body;
    const updates = {date, productId, userId};

    orderModel.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(order => res.status(200).json(order))
    .catch(e => res.status(500).json({error:e.message}));
  },

  remove: function(req, res) {
    const orderId = req.params.id;
    productModel.findByIdAndRemove(orderId)
    .then(res.status(204).json({message: 'product deleted'}))
    .catch(e => res.status(500).json({error:e.message}))
  }
};
