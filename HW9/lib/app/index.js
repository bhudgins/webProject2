"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const expressHandlebars = require("express-handlebars");
const sessionFileStore = require("session-file-store");
const helpers = require("./helpers");
const config = require("../config");
const cloudRouter = require("./cloud/routes");
exports.app = express();
exports.app.engine('hb', expressHandlebars({
    extname: ".hb",
    helpers: helpers,
}));
exports.app.set("view engine", "hb");
if (config.logFormat) {
    exports.app.use(morgan(config.logFormat));
}
const FileStore = sessionFileStore(expressSession);
exports.app.use(expressSession({
    secret: config.sessionSecret,
    store: new FileStore,
    saveUninitialized: false,
    resave: false,
}));
exports.app.use(bodyParser.urlencoded({ extended: false }));
//routes specific to your app
exports.app.use("/cloud", cloudRouter);
//Static files
exports.app.use(express.static("./static"));
//# sourceMappingURL=index.js.map