const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Pokemon', schema);