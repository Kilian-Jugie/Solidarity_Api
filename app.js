var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var api = require("./api/api")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
router.use(bodyParser.json());

app.use('/',(req, res, next) => {
    //res.send(req.originalUrl);
    
    api.API.api_main(req, res);
});


//let opts = {'extensions': ["html"], 'redirect': false}

//app.use(express.static(path.join(__dirname, 'public'), opts));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;
