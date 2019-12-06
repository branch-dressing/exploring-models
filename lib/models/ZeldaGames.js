const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    yearReleased: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('ZeldaGames', schema);