const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});


const restaurant = [{
  name: 'la almeja dorada',
  img: 'http://res.cloudinary.com/manueldpl91/image/upload/v1507038431/logo_k3ofww.svg',
  description: 'comida erotica',
  products: []
},
{
  name: 'wahira wantanamera',
  img: 'http://res.cloudinary.com/manueldpl91/image/upload/v1507038431/logo_k3ofww.svg',
  description: 'comida panchita',
  products: []
},
{
  name: 'La cocinona',
  img: 'http://res.cloudinary.com/manueldpl91/image/upload/v1507038431/logo_k3ofww.svg',
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
