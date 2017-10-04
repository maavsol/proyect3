var productModel = require('../models/productModel.js');

module.exports = {

  list: function(req, res) {
    productModel.find()
      .then(products => res.status(200).json(products))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  show: function(req, res) {
    const id = req.params.id;
    productModel.findById(id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: function(req, res) {
    const product = new productModel({
      restaurantId: req.body.restaurantId,
      name: req.body.name,
      price: req.body.price

    });

    product.save()
      .then(product => res.status(201).json({
        message: 'new product added',
        product: product
      }))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  update: function(req, res) {

    const {restaurantId, name, price} = req.body;
    const updates = {restaurantId, name, price};

    productModel.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(product => res.status(200).json(product))
    .catch(e => res.status(500).json({error:e.message}));
  },

  remove: function(req, res) {
    const productId = req.params.id;
    productModel.findByIdAndRemove(productId)
    .then(res.status(204).json({message: 'product deleted'}))
    .catch(e => res.status(500).json({error:e.message}))
  }
}
