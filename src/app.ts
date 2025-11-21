import express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    res.send("Hello World!");
})

export = app;
