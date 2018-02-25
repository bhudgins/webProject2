import * as fs from "fs";
//import expressHandlebars = require('express-handlebars');
//import handlebars = require('handlebars');
export function isDirectory(name: string)
{
    name = "./dir/" + name;

    console.log(name);
    fs.stat(name, (err, stats) => {
        if (err) {
                console.log(err);
        }
        else {
            if (stats.isDirectory())
            {
                console.log(1);
                //return new handlebars.SafeString(`<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>`);
                //'<img src="../images/folder.png" alt="foldericon"><a href="./{{this}}">{{this}}</a><br>';
            }
            else
            {
                console.log(2);
                //return new handlebars.SafeString(`<a href="./{{this}}?download"><img src="../images/download.png" alt="foldericon"></a><a href="./{{this}}">{{this}}</a><br>`);
            }
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