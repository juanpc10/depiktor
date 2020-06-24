
const request = require('supertest');
const app = require('../router');





describe('Index routes', () => {

  it('Status code 200', () => {
    request(app)
      .get('/')
      .expect(200)
  });

  it('Status code 404', () => {
    request(app)
      .get('/')
      .expect(404)
  });

  it('Returns empty json', () => {
    request(app)
      .get('/')
      .expect(function (res) {
          expect(res.body).toBe({});
        })
  });

});