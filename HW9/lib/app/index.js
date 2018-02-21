"use strict";
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const config1 = require("../config");
const expressHandlebars = require('express-handlebars');
const todoRouter = require("./todo/routes");
let app = express();
app.engine('hb', expressHandlebars({
    defaultLayout: null,
}));
app.use(expressSession({
    secret: config.sessionSecret,
    saveUninitialized: true,
    resave: false,
}));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded());
module.exports = app;
//# sourceMappingURL=index.js.map