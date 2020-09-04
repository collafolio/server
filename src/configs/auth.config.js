const dotenv = require('dotenv');
const dotenvResult = dotenv.config();

if (dotenvResult.error) {
  throw new Error("Can't find .env file");
}

module.exports = {
  secret: process.env.JWT_SECRET,
};
