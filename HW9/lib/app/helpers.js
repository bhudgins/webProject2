"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
//import expressHandlebars = require('express-handlebars');
//import handlebars = require('handlebars');
function isDirectory(name) {
    name = "./dir/" + name;
    console.log(name);
    fs.stat(name, (err, stats) => {
        if (err) {
            console.log(err);
        }
        else {
            if (stats.isDirectory()) {
                console.log(1);
                //return new handlebars.SafeString(`<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>`);
                //'<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>';
            }
            else {
                console.log(2);
                //return new handlebars.SafeString(`<a href="./{{this}}?download"><img src="../images/download.png" alt="foldericon"></a><a href="./{{this}}">{{this}}</a><br>`);
            }
        }
    });
}
exports.isDirectory = isDirectory;
/*export function ifIsDirectory(block:any)
{
    fs.stat(this, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT')
            {
            }
        }
        else {
            if (stats.isDirectory())
            {
                return block(this);
            }
            else
                return block.inverse(this);
        }
    })
}*/ 
//# sourceMappingURL=helpers.js.map