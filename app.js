const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
const path = require('path');

const userRoute = require('./routes/user');
const registerRoute = require('./routes/register');
const storyRoute = require('./routes/story');
const commentRoute = require('./routes/comment');
const sessionRoute = require('./routes/session');
const storyCategoryRoute = require('./routes/storycategories');

const { ValidationError } = require("sequelize");
const { environment } = require("./config");
const { api } = require('./config');
const cors = require("cors");


app.use((req, res, next) => {
  res.locals.api = api;
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use('/register', registerRoute);
app.use('/story', storyRoute);
app.use('/comment', commentRoute);
app.use('/user', userRoute);
app.use('/session', sessionRoute);
app.use('/storycategories', storyCategoryRoute);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Error handlers. (must have all four arguments to communicate to Express that
// this is an error-handling middleware function)

// Process sequelize errors
app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";

  res.json({
    title: err.title || "Server Error",
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
  // res.render('404', {
  //   title: err.title || "Server Error",
  //   errors: err.errors,
  //   stack: isProduction ? null : err.stack,
  // });
});


module.exports = app;
