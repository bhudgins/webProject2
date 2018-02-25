"use strict";
//Helper functions to determine which pictures should be shown beside file names
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const handlebars = require("handlebars");
var directory;
var folderPath = "../folder.png";
var downloadPath = "../download.png";
function setDirectory(directParam) {
    let pos = directParam.indexOf("/");
    pos = directParam.indexOf("/", pos + 1);
    directParam = directParam.substring(pos);
    directory = directParam;
}
exports.setDirectory = setDirectory;
function isDirectory(name) {
    let originalName = name;
    if (directory != "/" && directory !== undefined) {
        folderPath = "../" + folderPath;
        downloadPath = "../" + downloadPath;
        name = "./dir/" + directory + "/" + name;
    }
    else {
        name = "./dir/" + name;
    }
    let isfile;
    // console.log(name);
    //isfile = isFile(name);
    var stat = fs.statSync(name);
    if (stat.isDirectory() === true) {
        isfile = false;
    }
    else if (stat.isDirectory() === false) {
        isfile = true;
    }
    if (isfile === undefined) {
        // console.log("undefined");
    }
    else if (!isfile) {
        //console.log("directory");
        return new handlebars.SafeString(`<img src="${folderPath}" alt="foldericon" width="20px" height="20px">&nbsp;<a href="./${originalName}/">${originalName}</a><br>`);
    }
    else {
        //console.log("file");
        return new handlebars.SafeString(`<a href="./${originalName}?download"><img src="${downloadPath}" alt="saveicon" width="20px" height="20px"></a>&nbsp;<a href="./${originalName}">${originalName}</a><br>`);
    }
}
exports.isDirectory = isDirectory;
//# sourceMappingURL=helpers.js.map