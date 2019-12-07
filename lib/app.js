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

app.post('/book/', (req, res) => {
    res.send(req.body);
});




module.exports = {
    app
};
