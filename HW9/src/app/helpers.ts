import * as fs from "fs";
import expressHandlebars = require('express-handlebars');

export function isDirectory(name: string)
{
    fs.stat(name, (err, stats) => {
        if (err) {
            if (err.code == 'ENOENT')
            {
            }
        }
        else {
            if (stats.isDirectory())
            {
                return '<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>';
            }
            else
                return '<a href="./{{this}}?download"><img src="../images/download.png" alt="foldericon"></a>' + 
                    '<a href="./{{this}}">{{this}}</a><br>';
        }
    })
}

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