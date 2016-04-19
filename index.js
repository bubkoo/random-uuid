'use strict';

module.exports = function (prefix) {

  prefix = prefix || '';

  return (prefix + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    .replace(/[xy]/g, function (c) {

      var r = Math.random() * 16 | 0;
      var v = (c === 'x') ? r : (r & 0x3 | 0x8);

      return v.toString(16);
    });
};
