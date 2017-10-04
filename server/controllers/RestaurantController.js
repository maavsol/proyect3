var restaurantModel = require('../models/restaurantModel.js');

module.exports = {

  list: function(req, res) {
    restaurantModel.find()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  show: function(req, res) {
    const id = req.params.id;
    restaurantModel.findById(id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  create: function(req, res) {
    const restaurant = new restaurantModel({
      name: req.body.name
    });

    restaurant.save()
      .then(restaurant => res.status(201).json({
        message: 'new restaurant added',
        restaurant: restaurant
      }))
      .catch(e => res.status(500).json({
        error: e.message
      }));
  },

  update: function(req, res) {
    const {name} = req.body;
    const updates = {name};

    restaurantModel.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(restaurant => res.status(200).json(restaurant))
    .catch(e => res.status(500).json({error:e.message}));
  },

  remove: function(req, res) {
    const orderId = req.params.id;
    restaurantModel.findByIdAndRemove(orderId)
    .then(res.status(204).json({message: 'restaurant deleted'}))
    .catch(e => res.status(500).json({error:e.message}))
  }
};
