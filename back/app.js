const express = require('express');
const parse = require('./routes/parse');
const chatbot = require('./routes/chatbot');
const social = require('./routes/social');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', parse);
app.use('/', chatbot);
app.use('/', social);

module.exports = app;