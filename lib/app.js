const express = require('express');
const app = express();
const Book = require('./models/Book');

app.use(express.json());

app.get('/book/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => {
            res.send(book);
        });
});

app.post('/book', (req, res) => {
    const {
        title,
        author,
        pages
    } = req.body;

    Book.create({ 
        title,
        author,
        pages
    })
        .then(createBook => res.send(createBook));
});





module.exports = {
    app
};
