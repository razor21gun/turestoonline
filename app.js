var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var orderRouter = require('./routes/order');
var registroRouter = require('./routes/registro');
var productRouter = require('./routes/product');
var categoryRouter = require('./routes/category');
var deliveryTypeRouter = require('./routes/deliveryType');
var paymentTypeRouter = require('./routes/paymentType');
var loginRouter = require('./routes/login');
var orderStateRouter = require('./routes/orderState');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use(express.static(__dirname + '/public/images'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/order', orderRouter);
app.use('/registro', registroRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/deliveryType', deliveryTypeRouter);
app.use('/paymentType', paymentTypeRouter);
app.use('/login', loginRouter);
app.use('/orderState', orderStateRouter);




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
