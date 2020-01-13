const request = require('supertest'); 
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

    it('POST to /login returns 200 with json, Welcome message, and a session', async () => {
        request(server)
            .post('/api/auth/login')
            .send({username: "TheOfficialAdmin", password: "ilovelambda"})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                res.message = "Welcome Student tesst!",
                res.session;
            });
    });

    it('GET to /logout returns 200, Logged out successfully, deletes session', async () => {
        request(server)
            .get('/api/auth/logout')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(function(res) {
                res.message = "Logged out successfully",
                res.session = false;
            });
    })
});