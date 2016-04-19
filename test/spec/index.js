var expect = require('chai').expect;


describe('random-uuid', function () {

  var uuid = require('../../');

  it('common', function () {
    expect(uuid()).to.be.a('string');
    expect(uuid().replace(/\-/g, '').length).to.be.equal(32);
    expect(uuid('demo-')).to.be.match(/^demo\-/);
  });
});
