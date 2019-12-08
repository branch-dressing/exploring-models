require('dotenv').config();
require('./lib/utils/connect')();
const { app } = require('./lib/app');

app.listen('9876', () => {
    console.log('started!');
});