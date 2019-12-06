const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    pokedexNumber: {
        type: Number,
        required: true,
        min: 1,
        max: 151
    },
});

module.exports = mongoose.model('Pokemon', schema);