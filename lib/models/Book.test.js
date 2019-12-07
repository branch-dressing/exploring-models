const Book = require('./Book.js');

describe('Book model', () => {
    describe('Book name', () => {
        it.skip('requires a title', () => {
            const book = new Book({
                author: 'Frank Herbert',
                pages: 500
            });
    
            const { errors } = book.validateSync();
            expect(errors.title.message).toEqual('Path `title` is required.');
        });
    });
    describe('Book author', () => {
        it.skip('requires a title', () => {
            const book = new Book({
                title: 'Dune',
                pages: 500
            });
    
            const { errors } = book.validateSync();
            expect(errors.author.message).toEqual('Path `author` is required.');
        });
    });
    describe('Book pages', () => {
        it.skip('requires a pages', () => {
            const book = new Book({
                title: 'Dune',
                author: 'Frank Herbert'
            });
    
            const { errors } = book.validateSync();
            expect(errors.pages.message).toEqual('Path `pages` is required.');
        });
    });
});
