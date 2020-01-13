const request = require('supertest'); 
const server = require('../server');

describe('users router is restricted', function() {
    it('GET /users responds with 404 please login', function() {
      return request(server)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(404)
        .expect(function(res) {
            res.message = 'Please login'
        });
    });
    it('GET /users/1 responds with 404 please login', function(){
        return request(server)
            .get('/api/users/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect(function(res) {
                res.message = 'Please login'
            });
    })
  });