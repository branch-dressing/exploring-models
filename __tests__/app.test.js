const request = require('supertest');
const { app } = require('../lib/app');
const mongoose = require('mongoose');
require('../lib/utils/connect')();
const Book = require('../lib/models/Book');

describe('app routes', () => {
    let book;
    let updatedBook;
    let fakeBook;
    let deletedBook;

    beforeAll(async() => {
        book = await Book.create({
            title: 'Dune',
            author: 'Frank Herbert',
            pages: 500
        });

        fakeBook = await Book.create({
            title: 'Princess Bride',
            author: 'S. Morgenstern',
            pages: 2563
        });

        updatedBook = await Book.findByIdAndUpdate(fakeBook._id, {
            title: 'Princess Bride',
            author: 'William Goldman',
            pages: 392
        });

        deletedBook = await Book.create({
            title: 'House of Leaves',
            author: 'Mark Z. Danielewski',
            pages: 709
        });
    });

    // afterAll(async() => {
    //     mongoose.connection.collections['books'].drop(function() {
    //         console.log('collection dropped');
    //     });
    // });

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
                    _id: expect.any(String),
                    __v: 0,
                    title: 'Princess Bride',
                    author: 'William Goldman',
                    pages: 392
                });
            });
    });

    it.skip('has a route to get all books', () => {
        return request(app)
            .get(`/`)
            .then(res => {
                expect(res.body).toEqual([{
                    _id: expect.any(String),
                    __v: 0,
                    title: 'Dune',
                    author: 'Frank Herbert',
                    pages: 500
                },
                {
                    _id: expect.any(String),
                    __v: 0,
                    title: 'Princess Bride',
                    author: 'William Goldman',
                    pages: 392
                },
                {
                    _id: expect.any(String),
                    __v: 0,
                    title: '2666',
                    author: 'Roberto Bolaño',
                    pages: 989,
                },
                {
                    _id: expect.any(String),
                    __v: 0,
                    title: 'House of Leaves',
                    author: 'Mark Z. Danielewski',
                    pages: 709
                }
                ]);
            });
    });

    // it has a route that finds and delets.
    it('has a route that finds and deletes a book', () => {
        return request(app)
            .del(`/${deletedBook._id}`)
            .then(res => {
                expect(res.body).toEqual({
                    _id: expect.any(String),
                    __v: 0,
                    title: 'House of Leaves',
                    author: 'Mark Z. Danielewski',
                    pages: 709
                });
            });
    });
});
