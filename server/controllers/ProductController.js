var productModel = require('../models/productModel.js');

/**
 * productController.js
 *
 * @description :: Server-side logic for managing products.
 */
module.exports = {

  /**
   * productController.list()
   */
  list: function(req, res) {
    productModel.find(function(err, products) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting product.',
          error: err
        });
      }
      return res.json(products);
    });
  },

  /**
   * productController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    productModel.findOne({
      _id: id
    }, function(err, product) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting product.',
          error: err
        });
      }
      if (!product) {
        return res.status(404).json({
          message: 'No such product'
        });
      }
      return res.json(product);
    });
  },

  /**
   * productController.create()
   */
  create: function(req, res) {
    var product = new productModel({
      restaurantId: req.body.restaurantId,
      name: req.body.name,
      price: req.body.price

    });

    product.save(function(err, product) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating product',
          error: err
        });
      }
      return res.status(201).json(product);
    });
  },

  /**
   * productController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    productModel.findOne({
      _id: id
    }, function(err, product) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting product',
          error: err
        });
      }
      if (!product) {
        return res.status(404).json({
          message: 'No such product'
        });
      }

      product.restaurantId = req.body.restaurantId ? req.body.restaurantId : product.restaurantId;
      product.name = req.body.name ? req.body.name : product.name;
      product.price = req.body.price ? req.body.price : product.price;

      product.save(function(err, product) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating product.',
            error: err
          });
        }

        return res.json(product);
      });
    });
  },

  /**
   * productController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    productModel.findByIdAndRemove(id, function(err, product) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the product.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
