const { development, production } = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const productionEnv = process.env.NODE_ENV === 'production';
const port = productionEnv ? production.port : development.port;
const mongodb = productionEnv ? production.mongodb : development.mongodb;

console.log(`mode: ${productionEnv ? 'production' : 'development'}`);

mongoose.Promise = global.Promise;
mongoose
  .connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to mongodb');
    // init db here
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // allow cookies
  }),
);
app.use('/api', routes); // routes

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
