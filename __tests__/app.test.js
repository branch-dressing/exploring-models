const request = require('supertest');
const { app } = require('../lib/app');

describe('app routes', () => {
    it('has a home route that asks what up', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({ text: 'what up' });
            });
    });
});

