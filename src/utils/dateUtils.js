const moment = require('moment-timezone');

const toSeoulDate = function (date) {
  return moment(date).tz('Asia/Seoul').format('YYYY-MM-DD HH:mm');
};

exports.translateDate = function (obj) {
  obj.createdAt = toSeoulDate(obj.createdAt);
  obj.updatedAt = toSeoulDate(obj.updatedAt);
  if (obj.expiresAt) {
    obj.expiresAt = toSeoulDate(obj.expiresAt);
  }
};

exports.toDateAfter = function (date, days) {
  return moment(date).add(days, 'days');
};
