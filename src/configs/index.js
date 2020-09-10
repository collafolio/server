const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw new Error("Can't find .env file");
}

module.exports = {
  auth: {
    jwtSecret: process.env.JWT_SECRET,
  },
  local: {
    port: process.env.PORT,
    clientOrigin: process.env.CLIENT_ORIGIN_LOCAL,
    mongodb: process.env.MONGODB_LOCAL,
  },
  production: {
    clientOrigin: process.env.CLIENT_ORIGIN_CLOUD,
    mongodb: process.env.MONGODB_CLOUD,
  },
};
