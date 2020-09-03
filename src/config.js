const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw new Error("Can't find .env file");
}

module.exports = {
  development: {
    port: 4000,
    secret: process.env.JWT_SECRET,
    mongodb: process.env.MONGODB_LOCAL,
  },
  production: {
    port: process.env.PORT,
    secret: process.env.JWT_SECRET,
    mongodb: process.env.MONGODB_CLOUD,
  },
};
