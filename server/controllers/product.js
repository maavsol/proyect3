const productModel = require('../models/product')

module.exports = {

  list: function(req, res) {
    productModel.find()
      .then(products => res.status(200).json(products))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  },

  show: function(req, res) {
    const id = req.params.id
    productModel.findById(id)
      .then(p => res.status(200).json(p))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}
