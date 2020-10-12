const express = require('express');
const mongoose = require('mongoose');
const { local, production } = require('./configs');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const routes = require('./routes');
require('colors');

const productionEnv = process.env.NODE_ENV === 'production';
const mongodb = productionEnv ? production.mongodb : local.mongodb;
const morganFormat = productionEnv ? 'combined' : 'dev';
const port = local.port || 8080;

console.log(`mode: ${productionEnv ? 'production' : 'development'}`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: [local.clientOrigin, production.clientOrigin],
    method: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // allow cookies
  }),
);
app.use(morgan(morganFormat));
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to Collafolio server' });
});

app.use('/api', routes); // set API routes

// Connecting the database and then starting the app.
mongoose.Promise = global.Promise;
mongoose
  .connect(mongodb, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Successfully connected to mongodb');
    /*
      initialize db here
    */
    app.listen(port, () => {
      console.log(`Server listen on ${port}`);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit();
  });
