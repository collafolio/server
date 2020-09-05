const { User } = require('../models');

exports.createUserWithEmail = (email) => {
  // make doc, save doc, and return result (Promise)
  const user = new User({ email: email });
  return user.save();
};
// return User.create({ email: email }).save();

exports.deleteUserById = (id) => {
  // make query, execute query, and return result (Promise)
  return User.findByIdAndDelete(id).exec();
};
// return new Promise((resolve, reject) => {
//   User.findByIdAndDelete(id, (err, user) => {
//     if (err) reject(err);
//     if (user) resolve(user);
//   });
// });
