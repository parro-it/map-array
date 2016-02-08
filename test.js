const test = require('tape');
const mapArray = require('./');

test('it work!', t => {
  const result = mapArray();
  t.equal(result, 42);
  t.end();
});
