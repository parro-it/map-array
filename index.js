'use strict';
const map = require('map-obj');

module.exports = function mapToArray(obj, fn) {
  let idx = 0;
  const result = map(obj, (key, value) =>
    [idx++, fn(key, value)]
  );
  result.length = idx;
  return Array.from(result);
};
