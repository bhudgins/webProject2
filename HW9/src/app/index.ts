import express = require("express");
import morgan = require("morgan");
import bodyParser = require("body-parser");
import expressSession = require("express-session");
import config1 = require("../config");
import expressHandlebars = require('express-handlebars');
import sessionFileStore = require("session-file-store");
import * as helpers from "./helpers";
import * as config from "../config"

export const app = express();
app.engine('hb', expressHandlebars({
  extname: ".hb",
    helpers: helpers,
}));

app.set("view engine", "hb");

if(config.logFormat){
    app.use(morgan(config.logFormat));
}

const FileStore = sessionFileStore(expressSession);
app.use(expressSession({
  secret: config.sessionSecret,
  store: new FileStore,
  saveUninitialized: false,
  resave: false,
}));

app.use(bodyParser.urlencoded({extended: false}));

//routes specific to your app

//Static files
app.use(express.static("./static"));