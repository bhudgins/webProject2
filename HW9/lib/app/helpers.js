"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//import expressHandlebars = require('express-handlebars');
const handlebars = require("handlebars");
function isDirectory(name) {
    let originalName = name;
    name = "./dir/" + name;
    let isfile;
    console.log(name);
    isfile = isFile(name);
    if (isfile === undefined) {
        console.log("undefined");
    }
    else if (!isfile) {
        console.log("directory");
        return new handlebars.SafeString(`<img src="../folder.png" alt="foldericon" width="20px" height="20px">&nbsp;<a href="./${originalName}/">${originalName}</a><br>`);
    }
    else {
        console.log("file");
        return new handlebars.SafeString(`<a href="./${originalName}?download"><img src="../download.png" alt="saveicon" width="20px" height="20px"></a>&nbsp;<a href="./${originalName}">${originalName}</a><br>`);
    }
}
exports.isDirectory = isDirectory;
function isFile(name) {
    let result = false;
    var stat = fs.statSync(name);
    if (stat.isDirectory() === true) {
        return false;
    }
    else if (stat.isDirectory() === false) {
        return true;
    }
}
;
//# sourceMappingURL=helpers.js.map