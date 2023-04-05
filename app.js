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
var app = express();

var indexRouter = require('./routes/index');
var Current_Jerseys_Router = require('./routes/current_jerseys');
var add_cart_Router = require("./routes/add_cart");
var shopping_cart_Router = require("./routes/shopping_cart");
var loginRouter = require("./routes/login");
var registerRouter = require("./routes/register");
var logoutRouter = require("./routes/logout");
var Vintage_Jerseys_Router = require('./routes/vintage_jerseys');
var categories_router = require("./routes/categories")
//setup express session

app.use(session({

  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
  }))
 
  // implement a user authentication
 
 
 
   //serialize and deserialize the user information

 
 
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
app.use('/current_jerseys', Current_Jerseys_Router);
app.use("/add_cart", add_cart_Router);
app.use("/shopping_cart", shopping_cart_Router);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/logout", logoutRouter);
app.use("/vintage_jerseys", Vintage_Jerseys_Router)
app.use("/categories", categories_router)

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
