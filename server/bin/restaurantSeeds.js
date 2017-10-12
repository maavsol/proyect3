const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant');
const {dbURL} = require('../config/database');

mongoose.connect(dbURL, {useMongoClient: true});


const restaurant = [{
  name: 'la almeja borracha',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'La almeja borracha, a menudo le dicen solamente la almeja, es el bar local de Quahog, su dueño es Jerome (Dueño actual) y anteriormente fue el locar de Horacio (Dueño anterior). Es el lugar favorito de Peter Griffin, Cleveland Brown, Joe Swanson y Glenn Quagmire, a veces la suele frecuentar Brian Griffin el perro de Peter.',
  products: []
},
{
  name: 'Yoshinoya',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Yoshinoya is at the same time a Japanese and a fast food restaurant. They offer authentic Japanese food to rice meals to kids meals that are served in a fast and friendly manner.',
  products: []
},
{
  name: 'Ironbar',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.',
  products: []
},{
  name: 'El Manchego',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.',
  products: []
},{
  name: 'Burger King',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.',
  products: []
},{
  name: 'Trattoria la Chopera',
  img: 'http://res.cloudinary.com/ddesyiweo/image/upload/v1507475956/best-restaurants-gq-0616-03_csjhba.jpg',
  description: 'Denny’s Restaurant offers a range of delicious American food to their customers. They regularly serve Breakfast, Lunch and Dinner at a great price, and they also offer food especially catered to senior citizens and to the health conscious.',
  products: []
}]


Restaurant.create(restaurant)
.then(restaurants => {
    console.log("Created restaurants");
    console.log(restaurants);
    mongoose.connection.close()
  })
  .catch(err => console.log(err))
