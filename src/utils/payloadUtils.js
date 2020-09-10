const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.verifyEmailValue = (email) => {
  if (EMAIL_REGEX.test(email)) {
    return true;
  }
  return false;
};
