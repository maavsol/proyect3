const mongoose = require('mongoose');
const Restaurant = require('../models/restaurantModel');
const Product = require('../models/productModel');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});

const product = [{
  name:'pollo',
  price:10
},
{
  name:'arroz',
  price:15
},
{
  name:'fajitas',
  price:20
}
]

Product.create(product)
  .then(products => {
    return Promise.all(products.map(products => {
      return Restaurant.updateOne({
          name: product.restaurant
        }, {
          $push: {
            products: product._id
          }
        })
        .exec()
        .then(restaurant => {
          console.log(product);
        })
    }))
  })
  .then((products) => {
    console.log("Pushed products to restaurants");
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
