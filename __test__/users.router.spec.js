const request = require('supertest'); 
const server = require('../server');

describe('GET /users', function() {
    it('responds with 404 please login', function() {
      return request(server)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect(function(res) {
            res.message = 'Please login'
        });
    });
  });