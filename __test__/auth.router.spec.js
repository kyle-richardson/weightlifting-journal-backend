const request = require('supertest'); //install 
const server = require('./server.js');
const Users = require('../Routes/users/users-model');

describe('authentication routes', () => {
    describe('POST to /register returns a user', () => {
        const testuser = { 'username': 'test', 'password':'passtest', 'department': 'Student'};
        const res = await request(server).post('/api/auth/register').send(testuser);
        res.expect(200);
        res.end((err, res) => {
            if (err) done(err);
            expect(res.saved).toEqual(expect.any(Object));
            done();
        });
    });
});