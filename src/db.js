const { development, production } = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(
    process.env.NODE_ENV === 'production'
      ? production.mongodb
      : development.mongodb,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  )
  .then((response) => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = mongoose;
