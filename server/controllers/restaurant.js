const restaurantModel = require('../models/restaurant')
const Product = require('../models/product')

module.exports = {

  list: (req, res) => {
    restaurantModel.find()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  show: (req, res) => {
    const id = req.params.id
    restaurantModel.findById(id).populate('products')
      .then(restaurant => res.status(200).json(restaurant))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}
