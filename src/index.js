const { development, production } = require('./config');
const mode = process.env.NODE_ENV;
console.log(`mode: ${mode}`);

require('./db');

const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const port = mode === 'production' ? production.port : development.port;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // allow cookies
  }),
);
app.use('/api', routes);

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
