'use strict';

// Constants
const PORT = 8080;

const express = require('express');
const app = express();

//ALLOW ORIGIN
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.use(allowCrossDomain);

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

var server = require('http').createServer(app);
var Order = require('./model/order.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_PORT.replace('tcp://', 'mongodb://'));

var path = require('path');

// load controllers
require('./controllers/index.js')(app, Order);

server.listen(PORT);
