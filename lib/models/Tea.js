const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Green', 'Black', 'Herbal'],
        required: true,
    },
    caffine: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Tea', schema);