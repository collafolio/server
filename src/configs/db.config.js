const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw new Error("Can't find .env file");
}

module.exports = {
  development: {
    mongodb: process.env.MONGODB_LOCAL,
  },
  production: {
    mongodb: process.env.MONGODB_CLOUD,
  },
};
