const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

module.exports = (email) => {
  if (regex.test(email)) return true;
  return false;
};
