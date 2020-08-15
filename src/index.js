require('dotenv').config();
require('./db');

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); // v4.16 이후 내장 모듈로 다시 들어옴 (body-parser 모듈 대체)
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST'],
    credentials: true, // allow cookie
  }),
);

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
