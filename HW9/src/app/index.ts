import express = require("express");
import morgan = require("morgan");
import bodyParser = require("body-parser");
import expressSession = require("express-session");
import config1 = require("../config");
import expressHandlebars = require('express-handlebars');
import sessionFileStore = require("session-file-store");
import * as config from "../config";
import * as cloudRouter from "./cloud/routes";
/*import * as multer from "multer";
import { Request,
  Response,
  NextFunction} from "express";
  
const upload = multer({dest: "./uploads/"});*/

export const app = express();
app.engine('hb', expressHandlebars({
  extname: ".hb",
  helpers: require("./helpers"),
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

/*app.post("/upload", upload.single("file1"), (req: Request, res:Response)=>{
  res.type("text/plain");
  res.send(`Uploaded ${req.file.originalname} to ${req.file.path}`);
});*/

//routes specific to your app
app.use("/cloud", cloudRouter);
app.post("/upload", cloudRouter);
//Static files
app.use(express.static("./images"));