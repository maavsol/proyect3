var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var restaurantSchema = new Schema({
	'name' : String,
	'img' : String,
	'description': String,
	'products': [{type:Schema.Types.ObjectId, ref:'Product'}]
});

module.exports = mongoose.model('restaurant', restaurantSchema);
