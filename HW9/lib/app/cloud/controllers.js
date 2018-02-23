"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
function dirPage(req, res, next) {
    let urlFileName = "./dir" + req.path;
    let directoryDisplay = req.originalUrl;
    fs.stat(urlFileName, (err, stats) => {
        if (err) {
            console.log(err);
        }
        else {
            if (stats.isDirectory()) {
                fs.readdir(urlFileName, (err, entries) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.render("main.hb", {
                            currentDirectory: directoryDisplay,
                            entries: entries,
                        });
                    }
                });
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