const request = require('supertest');
const { app } = require('../lib/app');
const mongoose = require('mongoose');
require('../lib/utils/connect')();
const Book = require('../lib/models/Book');

describe('app routes', () => {
    let book;
    let updatedBook;

    beforeAll(async() => {
        book = await Book.create({
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 500
            
        });

        updatedBook = await Book.findByIdAndUpdate(book._id, {
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 600
        });
    });

    afterAll(async() => {
        mongoose.connection.collections['books'].drop(function(err) {
            console.log('collection dropped');
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

    it('has a route that gets book by id and updates', () => {
        return request(app)
            .get(`/book/${updatedBook._id}`)
            .then(res => {
                expect(res.body).toEqual({
                    title: 'Dune',
                    author: 'Frank Herbert',
                    pages: 600
                });
            });
    });

    //it has a route that finds and delets.
});
