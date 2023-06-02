"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require('express');
dotenv.config();
var app = express();
var port = process.env.PORT || 3001;
var user = require('./routes/user');
var reward = require('./routes/reward');
// TODO: Add CORS
// const cors = require('cors');
// app.use(cors({
//   origin: ['']
// }));
app.use('/api/user', user);
app.use('/api/reward', reward);
app.get('/', function (req, res) {
    res.send('Express + TypeScript Server');
});
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
