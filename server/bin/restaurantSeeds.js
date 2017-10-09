const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});


const restaurant = [{
  name: 'la almeja dorada',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Culver’s Restaurant was founded by the Culver family in 1984, which eventually branched out to more than 300 franchised restaurants all over the US. Culver’s is well-known for its ButterBurger, which made the restaurant extremely famous. They also have other items which include salads, sandwiches, desserts, etc.',
  products: []
},
{
  name: 'Yoshinoya',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Yoshinoya is at the same time a Japanese and a fast food restaurant. They offer authentic Japanese food to rice meals to kids meals that are served in a fast and friendly manner.',
  products: []
},
{
  name: 'La cocinona',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.',
  products: []
  // orders:[]
}]


Restaurant.create(restaurant)
.then(restaurants => {
    console.log("Created restaurants");
    console.log(restaurants);
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
