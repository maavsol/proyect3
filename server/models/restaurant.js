const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const restaurantSchema = new Schema({
	'name' : String,
	'img' : String,
	'description': String,
	'products': [{type:Schema.Types.ObjectId, ref:'Product'}]
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
