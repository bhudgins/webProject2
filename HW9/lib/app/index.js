"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const expressHandlebars = require("express-handlebars");
const sessionFileStore = require("session-file-store");
const config = require("../config");
const cloudRouter = require("./cloud/routes");
/*import * as multer from "multer";
import { Request,
  Response,
  NextFunction} from "express";
  
const upload = multer({dest: "./uploads/"});*/
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
/*app.post("/upload", upload.single("file1"), (req: Request, res:Response)=>{
  res.type("text/plain");
  res.send(`Uploaded ${req.file.originalname} to ${req.file.path}`);
});*/
//routes specific to your app
exports.app.use("/cloud", cloudRouter);
exports.app.post("/upload", cloudRouter);
//Static files
exports.app.use(express.static("./images"));
//# sourceMappingURL=index.js.map