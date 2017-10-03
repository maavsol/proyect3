var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductSchema = new Schema({
	'restaurantId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Restaurant'
	},
	'name' : String,
	'price' : Number
});

module.exports = mongoose.model('Product', ProductSchema);
