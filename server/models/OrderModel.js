var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var orderSchema = new Schema({
	'date' : Date,
	'productId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Product'
	},
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
});

module.exports = mongoose.model('order', orderSchema);
