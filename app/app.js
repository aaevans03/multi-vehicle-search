const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.send("Hello world!");
})

module.exports = app;
