require('dotenv').config();

module.exports = {
  development: {
    port: process.env.PORT_LOCAL || 4000,
    mongodb: process.env.MONGODB_URI_LOCAL,
  },
  production: {
    port: process.env.PORT || 8080,
    mongodb: process.env.MONGODB_URI,
  },
};
