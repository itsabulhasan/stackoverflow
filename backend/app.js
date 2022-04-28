const express = require('express');
const logger = require('morgan');
require('dotenv').config();
const cors = require('cors');

const corsOptions = {
  origin: true,

  methods: 'GET,POST,PUT,DELETE,OPTIONS',

  credentials: true,

  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const usersRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use((err, req, res, next) => {
  console.error('in error handler');
  // set locals, only providing error in development

  res.locals.message = err.message;

  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 400).json({ error: { message: err.message } });
});

module.exports = app;