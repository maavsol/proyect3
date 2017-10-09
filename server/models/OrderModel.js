var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'date' : Date,
	'restaurantId': {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Restaurant'
	},
	'productId' : [],
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('order', orderSchema);
