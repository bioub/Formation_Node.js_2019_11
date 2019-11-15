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
      expect(res.body).to.deep.equal([]);
      mock.restore();
    });
  });

  // Faire le test de GET /api/contacts/123
  // Utiliser sinon.mock pour générer une fausse fonction findById qui resolves
  // un contact dont l'id est 123
  describe('GET /api/contacts/123', () => {
    let mock;

    beforeEach(() => {
      mock = sinon.mock(Contact);
    });

    afterEach(() => {
      mock.restore();
    });

    it('should respond contact with status 200', async () => {
      mock
        .expects('findById')
        .resolves({ firstName: 'Toto' })
        .calledOnceWithExactly('123');

      const res = await chai.request(app).get('/api/contacts/123');

      expect(res).to.have.status(200);
      expect(res.body).to.deep.equal({ firstName: 'Toto' });
    });

    it('should respond status 404 when contact is missing', async () => {
      mock
        .expects('findById')
        .resolves(null)
        .calledOnceWithExactly('123');

      const res = await chai.request(app).get('/api/contacts/123');

      expect(res).to.have.status(404);
      expect(res.body).to.deep.equal({ msg: 'Contact 123 not found' });
    });
  });
});
