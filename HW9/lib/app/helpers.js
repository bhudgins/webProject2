"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function isDirectory(name) {
    fs.stat(name, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT') {
            }
        }
        else {
            if (stats.isDirectory()) {
                return '<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>';
            }
            else
                return '<a href="./{{this}}?download"><img src="../images/download.png" alt="foldericon"></a>' +
                    '<a href="./{{this}}">{{this}}</a><br>';
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