var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var OrderSchema = new Schema({
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

module.exports = mongoose.model('Order', OrderSchema);
