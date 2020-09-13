const { User } = require('../models');

module.exports = {
  createLocalUserWithEmail: (email) => {
    return User.create({ email });
  },
  findLocalUserByEmail: (email) => {
    return User.findOne({ email }).exec();
  },
  deleteUserById: (userId) => {
    return User.findByIdAndDelete(userId).exec();
  },
};

// Model.method return query object and pass it into next function
// execute passed query and return result (Promise)
