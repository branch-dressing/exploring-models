const express = require('express');
const app = express();
//import model

app.use(express.json());

app.get('/', (req, res) => {
    //model . find
    //. then( thing => {})
    res.send({ text: 'what up' });
});

module.exports = {
    app
};
