const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw new Error("Can't find .env file");
}

module.exports = {
  development: {
    port: process.env.PORT || 4000,
    mongodb: process.env.MONGODB_URI_LOCAL,
  },
  production: {
    port: process.env.PORT || 8080,
    mongodb: process.env.MONGODB_URI_CLOUD,
  },
};
