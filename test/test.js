var assert = require('assert'),
  val = require('../index');

describe('im.val', function() {

  it('Should set default value if undefined or null is given', function () {
    assert.equal('default', val(undefined, 'default'));
    assert.equal('default', val(null, 'default'));
  });

  it('Should set default value if checker truth test is failed', function () {
    var ok = { test: 'ok' },
      test = val({ test: false }, true, function(value) {
        if (value.test !== 'ok') return false;
        return true;
      });
    assert.equal(true, test);
  });

  it('Should NOT set default value if value is given and valid', function () {
    assert.equal(true, val(true, 'default'));
  });

  it('Should NOT set default value if checker truth test is passed', function () {
    var ok = { test: 'ok' },
      test = val(ok, 'Not Passed', function(value) {
        if (value.test !== 'ok') return false;
        return true;
      });
    assert.equal(ok, test);
  });

});
