const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  'status': {
    type: Boolean,
    default: false
  },
  'restaurantId': {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  },
  'products': [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
  // 'userId': {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User'
  // }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }

})

module.exports = mongoose.model('order', orderSchema)
