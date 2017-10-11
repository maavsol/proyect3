const path = require('path');
const mongoose = require('mongoose');

//para compilar
// const dbURL = process.env.MONGODB_URI;
//para trabajar en desarrollo
// const dbURL = 'mongodb://localhost/asapp'
//para ejecutar las seeds
const dbURL = process.env.MONGODB_URI


mongoose.connect(dbURL)
  .then(() => console.log(`connected to database ${dbURL}`))
  .catch(e => {
    console.log(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });
