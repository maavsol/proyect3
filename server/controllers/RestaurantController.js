var restaurantModel = require('../models/restaurantModel.js');

/**
 * restaurantController.js
 *
 * @description :: Server-side logic for managing restaurants.
 */
module.exports = {

  /**
   * restaurantController.list()
   */
  list: function(req, res) {
    restaurantModel.find(function(err, restaurants) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting restaurant.',
          error: err
        });
      }
      return res.json(restaurants);
    });
  },

  /**
   * restaurantController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    restaurantModel.findOne({
      _id: id
    }, function(err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting restaurant.',
          error: err
        });
      }
      if (!restaurant) {
        return res.status(404).json({
          message: 'No such restaurant'
        });
      }
      return res.json(restaurant);
    });
  },

  /**
   * restaurantController.create()
   */
  create: function(req, res) {
    var restaurant = new restaurantModel({
      name: req.body.name

    });

    restaurant.save(function(err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when creating restaurant',
          error: err
        });
      }
      return res.status(201).json(restaurant);
    });
  },

  /**
   * restaurantController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    restaurantModel.findOne({
      _id: id
    }, function(err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when getting restaurant',
          error: err
        });
      }
      if (!restaurant) {
        return res.status(404).json({
          message: 'No such restaurant'
        });
      }

      restaurant.name = req.body.name ? req.body.name : restaurant.name;

      restaurant.save(function(err, restaurant) {
        if (err) {
          return res.status(500).json({
            message: 'Error when updating restaurant.',
            error: err
          });
        }

        return res.json(restaurant);
      });
    });
  },

  /**
   * restaurantController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    restaurantModel.findByIdAndRemove(id, function(err, restaurant) {
      if (err) {
        return res.status(500).json({
          message: 'Error when deleting the restaurant.',
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
