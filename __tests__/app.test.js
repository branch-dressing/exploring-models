const request = require('supertest');
const { app } = require('../lib/app');
require('../lib/utils/connect')();
const Book = require('../lib/models/Book');

describe('app routes', () => {
    let book;
    beforeAll(async() => {
        book = await Book.create({
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 500
        });
    });

    it('has a route that gets book by id', () => {
        return request(app)
            .get(`/book/${book._id}`)
            .then(res => {
                expect(res.body).toEqual({
                    _id: expect.any(String),
                    __v: 0,
                    title: 'Dune',
                    author: 'Frank Herbert',
                    pages: 500
                });
            });
    });

    it('has a route that posts a book', () => {
        return request(app)
            .post(`/book`)
            .send({
                title: '2666',
                author: 'Roberto Bolaño',
                pages: 989
            })
            .then(res => {
                expect(res.body).toEqual({
                    title: '2666',
                    author: 'Roberto Bolaño',
                    pages: 989,
                    _id: expect.any(String),
                    __v: 0
                });
            });
    });
});
