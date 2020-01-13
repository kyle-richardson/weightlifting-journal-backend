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
    it('POST to /workouts returns 200 with json and a newWorkout', async () => {
        request(server)
        .post('/api/workouts')
        .send({user_id: 1, workout_name: "test workout", date_created: "test date"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .expect(function(res) {
            res.newWorkout;
        });
    });
  });