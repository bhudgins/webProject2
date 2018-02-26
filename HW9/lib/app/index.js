"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Sets up app and routers.
//exports app
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const expressHandlebars = require("express-handlebars");
const sessionFileStore = require("session-file-store");
const config = require("../config");
const cloudRouter = require("./cloud/routes");
exports.app = express();
exports.app.engine('hb', expressHandlebars({
    extname: ".hb",
    helpers: require("./helpers"),
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
exports.app.post("/upload", cloudRouter);
//Static files
exports.app.use(express.static("./images"));
//# sourceMappingURL=index.js.map