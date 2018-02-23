"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function dirPage(req, res, next) {
    let urlFileName = "./dir" + req.path;
    let originalURL = req.originalUrl;
    fs.stat(urlFileName, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT') {
                console.log("1");
                pageNotFound(req, res, next);
            }
            //console.log(err);
        }
        else {
            if (stats.isDirectory()) {
                /*console.log(req.url);
                console.log(req.baseUrl);
                console.log(req.originalUrl);
                console.log(req.path);
                console.log(urlFileName);
                console.log(originalURL);*/
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
                                currentDirectory: originalURL,
                                entries: entries,
                            });
                        }
                    });
                }
            }
            else if (stats.isFile()) {
                res.sendFile(urlFileName, { root: path.join(__dirname, "../../../") });
            }
        }
    });
}
exports.dirPage = dirPage;
function pageNotFound(req, res, next) {
    res.sendStatus(404);
    res.send("<h1>Page not Found</h1>");
}
exports.pageNotFound = pageNotFound;
//# sourceMappingURL=controllers.js.map