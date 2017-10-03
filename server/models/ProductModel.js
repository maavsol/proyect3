var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var productSchema = new Schema({
	'restaurantId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Restaurant'
	},
	'name' : String,
	'price' : Number
});

module.exports = mongoose.model('product', productSchema);
