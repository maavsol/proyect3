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
    return Promise.all(products.map(product => {
      return Restaurant.updateMany({}, {
          $push: {
            products: product._id
          }
        })
        .exec()
        .then(product => {
          console.log(product);
        })
    }))
  })
  .then((restaurants) => {
    console.log("Pushed products to restaurant");
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
