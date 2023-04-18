const express = require('express');

const app = express();

app.get('/', (_request, response) => {
  response.status(200).json({ message: "Server on"});
});

app.use(express.json());

module.exports = app;
