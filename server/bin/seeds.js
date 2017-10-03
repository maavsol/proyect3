const mongoose = require('mongoose');
const Product = require('../models/ProductModel');
const {DB_URL} = require('../config/db');

mongoose.connect(DB_URL, {useMongoClient: true});

const products = [
  {
    name: 'Coca-cola',
    price: 1.99,
  },
  {
    name: 'Pollo Asado',
    price: 10.00,
  }
];

/*products.forEach(p => {
  new Product(p).save();
});
mongoose.connection.close();*/

Product.create(products, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach(p => console.log(p.name));
  mongoose.connection.close();
});
