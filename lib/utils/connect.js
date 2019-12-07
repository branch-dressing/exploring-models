require('dotenv').config();
const mongoose = require('mongoose');


function connect() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        userUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Connected! Woo!');
    });

    mongoose.connection.on('error', () => {
        console.error('Nope! Try again');
    });
}

module.exports = connect;
