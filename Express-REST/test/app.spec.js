const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
chai.use(sinonChai);
chai.use(chaiHttp);

const Contact = require('../models/contact');

describe('Functionnal Tests', () => {
  describe('GET /api/contacts', () => {
    it('should respond contacts with status 200', async () => {
      const mock = sinon.mock(Contact);
      mock.expects('find').resolves([]).calledOnce;

      const res = await chai.request(app).get('/api/contacts');

      expect(res).to.have.status(200);
      mock.restore();
    });
  });
});
