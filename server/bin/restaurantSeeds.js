const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});


const restaurant = [{
  name: 'la almeja dorada',
  description: 'comida erotica',
  products: []
},
{
  name: 'wahira wantanamera',
  description: 'comida panchita',
  products: []
},
{
  name: 'La cocinona',
  description: 'comida salvadora',
  products: []
}]


Restaurant.create(restaurant)
.then(restaurants => {
    console.log("Created restaurants");
    console.log(restaurants);
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
