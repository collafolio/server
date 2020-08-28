const { development, production } = require('./config');
const mode = process.env.NODE_ENV;

console.log(`mode: ${mode}`);

require('./db');
const express = require('express');
const cors = require('cors');

const app = express();
const port = mode === 'production' ? production.port : development.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // allow cookies
  }),
);

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
