const moment = require('moment');

exports.setNow = () => moment(new Date()).format('YYYY-MM-DD HH:mm');

exports.setAfter = days =>
  moment(new Date()).add(days, 'days').format('YYYY-MM-DD HH:mm');

exports.isExpired = date => {
  if (date < new Date()) {
    return true;
  }
  return false;
};
