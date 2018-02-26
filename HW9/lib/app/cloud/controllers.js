"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const config_1 = require("../../config");
const upload = multer({ dest: "./uploads/" });
var urlFileName = "";
//determines if the url is feasible; if so, determines if it is a File or Directory and whether or not to download
function dirPage(req, res, next) {
    urlFileName = config_1.cloudDirectory + req.path;
    let originalURL = req.originalUrl;
    fs.stat(urlFileName, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT') {
                //console.log("1");
                pageNotFound(req, res, next);
            }
        }
        else {
            if (stats.isDirectory()) {
                if (originalURL.charAt(originalURL.length - 1) != "/") {
                    res.status(307);
                    res.redirect(originalURL + "/");
                }
                else {
                    fs.readdir(urlFileName, (err, entries) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            res.render("main.hb", {
                                currentDirectory1: originalURL,
                                entries: entries,
                            });
                        }
                    });
                }
            }
            else if (stats.isFile()) {
                if (req.query.download != undefined) {
                    let filename = urlFileName;
                    let placeToStart = filename.lastIndexOf("/");
                    if (placeToStart != -1) {
                        filename = filename.substr(placeToStart + 1);
                    }
                    res.download(urlFileName, filename);
                }
                res.set("Content-Disposition", "inline");
                res.sendFile(urlFileName, { root: path.join(__dirname, "../../../") });
            }
        }
    });
}
exports.dirPage = dirPage;
function pageNotFound(req, res, next) {
    res.status(404);
    res.send("<h1>Page not Found</h1>");
}
exports.pageNotFound = pageNotFound;
function Upload(req, res, next) {
    //moves file from temp upload folder to dir
    console.log(req.path);
    if (req.file != undefined) {
        fs.rename(req.file.path, config_1.cloudDirectory + req.path + req.file.originalname, (err) => {
            if (err)
                console.log(err);
        });
    }
    res.redirect(config_1.currentDirectory + req.path);
}
exports.Upload = Upload;
//# sourceMappingURL=controllers.js.map