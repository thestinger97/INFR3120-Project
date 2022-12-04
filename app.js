var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let session = require("express-session");
let passport = require("passport");
let passportLocal = require("passport-local");
let localStrategy = passportLocal.Strategy;
let flash = require("connect-flash");
let userModel = require("./models/users");
let User = userModel.User;
var app = express();

var indexRouter = require('./routes/index');
var addwrestler_Router = require('./routes/add_wrestler');
var updatewrestler_Router = require("./routes/update_wrestler");
var removewrestler_Router = require("./routes/remove_wrestler");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var logoutRouter = require("./routes/logout");

//setup express session

app.use(session({

  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
  }))
 
  // implement a user authentication
  passport.use(User.createStrategy());
 
 
   //serialize and deserialize the user information
   passport.serializeUser(User.serializeUser());
   passport.deserializeUser(User.deserializeUser());
 
 
  //initialize passport
  app.use(passport.initialize());
  app.use(passport.session());
  
 
   //initialize flash
   app.use(flash());
 
  

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/add_wrestler', addwrestler_Router);
app.use("/update_wrestler", updatewrestler_Router);
app.use("/remove_wrestler", removewrestler_Router);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/logout", logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
