const authenticate = require('../../middlewares/authenticate');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

describe('#authenticate', () => {
  it('should respond status 401 when token is missing', () => {
    const req = {
      headers: {},
    };
    const res = {
      json: sinon.spy(),
    };
    const next = () => {};
    authenticate(req, res, next);
    expect(res.statusCode).to.equal(401);
    expect(res.json).to.have.been.calledOnceWithExactly({
      msg: 'Unauthorized',
    });
  });

  it('should call next when token is valid', () => {
    const req = {
      headers: {
        authorization: 'd4973653-9895-4123-a7dd-3e1387d0fbde'
      },
    };
    const res = {};
    const next = sinon.spy();
    authenticate(req, res, next);
    expect(next).to.have.been.calledOnceWithExactly();
  });
});
