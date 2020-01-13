const request = require('supertest'); 
const server = require('../server');

describe('workouts router', function() {
    it('GET workouts responds with 200', function() {
      return request(server)
        .get('/api/workouts/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });
  });