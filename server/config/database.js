const path = require('path');
const mongoose = require('mongoose');
//para compilar
// const dbURL = process.env.MONGODB_URI;
//para trabajar en desarrollo
const dbURL = 'mongodb://localhost/asapp'
//para ejecutar las seeds
// const dbURL = 'mongodb://admin:1234@ds113935.mlab.com:13935/asapp';


mongoose.connect(dbURL)
  .then(() => console.log(`connected to database ${dbURL}`))
  .catch(e => {
    console.log(`ERROR CONNECTING TO DB ${dbURL}`);
    throw e;
  });
