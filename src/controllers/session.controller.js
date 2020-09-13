const service = require('../services/session.service');
const { generateToken } = require('../utils/tokenUtils');

exports.createLocalUser = (req, res) => {
  service
    .createLocalUserWithEmail(req.body.email)
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const { id, email, meta } = user;
      const accessToken = await generateToken({ id });
      return res
        .status(201)
        .cookie('x-access-token', accessToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        })
        .send({ id, email, meta });
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
};

exports.loginLocalUser = (req, res) => {
  service
    .findLocalUserByEmail(req.body.email)
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const { id, email, meta } = user;
      try {
        const accessToken = await generateToken({ id }); // object로 넣어줘야 options 설정도 가능
        console.log(accessToken);
        /*
         * If refresh token needed, generate here
         */
        return res
          .status(200)
          .cookie('x-access-token', accessToken, {
            httpOnly: true, // cookie only used for http request (client script can't get this)
            maxAge: 1000 * 60 * 60 * 24 * 7, // === '7d', maxAge requires Number
          })
          .send({ id, email, meta });
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
    .cookie('x-access-token', null, { httpOnly: true, maxAge: 0 }) // maxAge 0이면 쿠키 소멸 상태
    .send({ message: 'Logout success' });
};

exports.deleteUser = (req, res) => {
  service
    .deleteUserById(req.params.userid)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      return res
        .status(204)
        .cookie('x-access-token', null, { httpOnly: true, maxAge: 0 })
        .send({ message: 'Successfully deleted user' });
    })
    .catch((error) => {
      return res.status(500).send({ error });
    });
  /*
   * Drop user doc and user's profile, post, apply, and comment docs using bulkWrite
   */
};
