var RestaurantModel = require('../models/RestaurantModel.js');

/**
 * RestaurantController.js
 *
 * @description :: Server-side logic for managing Restaurants.
 */
module.exports = {

    /**
     * RestaurantController.list()
     */
    list: function (req, res) {
        RestaurantModel.find(function (err, Restaurants) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Restaurant.',
                    error: err
                });
            }
            return res.json(Restaurants);
        });
    },

    /**
     * RestaurantController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        RestaurantModel.findOne({_id: id}, function (err, Restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Restaurant.',
                    error: err
                });
            }
            if (!Restaurant) {
                return res.status(404).json({
                    message: 'No such Restaurant'
                });
            }
            return res.json(Restaurant);
        });
    },

    /**
     * RestaurantController.create()
     */
    create: function (req, res) {
        var Restaurant = new RestaurantModel({
			name : req.body.name

        });

        Restaurant.save(function (err, Restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Restaurant',
                    error: err
                });
            }
            return res.status(201).json(Restaurant);
        });
    },

    /**
     * RestaurantController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        RestaurantModel.findOne({_id: id}, function (err, Restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Restaurant',
                    error: err
                });
            }
            if (!Restaurant) {
                return res.status(404).json({
                    message: 'No such Restaurant'
                });
            }

            Restaurant.name = req.body.name ? req.body.name : Restaurant.name;
			
            Restaurant.save(function (err, Restaurant) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Restaurant.',
                        error: err
                    });
                }

                return res.json(Restaurant);
            });
        });
    },

    /**
     * RestaurantController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        RestaurantModel.findByIdAndRemove(id, function (err, Restaurant) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Restaurant.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
