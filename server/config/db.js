// module.exports = {
//   DB_URL:'mongodb://localhost/asapp'
// };

const mongoose = require('mongoose');
const dbName = 'asapp';

// connect to the database
mongoose.connect(`mongodb://localhost/${dbName}`)
        .then(() => console.log("Connected to DB!"))
        .catch(e => console.error(console, 'connection error:'));
