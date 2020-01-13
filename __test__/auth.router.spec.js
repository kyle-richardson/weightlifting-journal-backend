const request = require('supertest'); //install 
const server = require('../server');

describe('authentication routes', () => {
    it('POST to /register returns 200 with json', async () => {
        request(server)
        .post('/api/auth/register')
        .send({username: "test", password: "testpass", department:"Student"})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });
});