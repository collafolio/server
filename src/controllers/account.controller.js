const {
  createUserWithEmail,
  findUserByEmail,
  deleteUserById,
} = require('../services');
const { generateToken } = require('../utils/tokenUtils');

exports.createLocalUser = (req, res) => {
  createUserWithEmail(req.body.email)
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const accessToken = await generateToken({ id: user.id });
      return res
        .status(201)
        .cookie('x-access-token', accessToken, { httpOnly: true })
        .send(user);
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
};

exports.loginLocalUser = (req, res) => {
  findUserByEmail(req.body.email)
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const { id, email } = user;
      try {
        const accessToken = await generateToken({ id }); // object로 넣어줘야 options 설정도 가능
        console.log(accessToken);
        /*
         * If refresh token needed, generate here
         */
        return res
          .status(200)
          .cookie('x-access-token', accessToken, { httpOnly: true })
          .send({ id, email });
      } catch (error) {
        return res.status(500).send({ error });
      }
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
};

exports.logoutUser = (req, res) => {
  res
    .status(204)
    .cookie('x-access-token', null, { httpOnly: true, maxAge: 0 })
    .send({ message: 'Logout success' });
};

exports.deleteUser = (req, res) => {
  deleteUserById(req.params.userid)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      return res.status(200).send({ message: 'Signout success' });
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
  /*
   * Drop user doc and user's profile, post, apply, and comment docs using bulkWrite
   */
};
