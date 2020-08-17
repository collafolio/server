require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((response) => {
    console.log('Connected to mongodb');
  })
  .catch((e) => {
    console.error(e);
  });

module.exports = mongoose;
