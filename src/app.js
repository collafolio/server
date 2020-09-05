const express = require('express');
const mongoose = require('mongoose');
const { development, production } = require('./configs/db.config');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const productionEnv = process.env.NODE_ENV === 'production';
const morganFormat = productionEnv ? 'combined' : 'dev';
const port = process.env.PORT || 8080;
const mongodb = productionEnv ? production.mongodb : development.mongodb;

console.log(`mode: ${productionEnv ? 'production' : 'development'}`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // allow cookies
  }),
);
app.use(morgan(morganFormat));
app.use('/api', routes); // routes

app.listen(port, () => {
  console.log(`server listen on ${port}`);
});

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
