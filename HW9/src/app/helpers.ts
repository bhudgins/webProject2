//Helper functions to determine which pictures should be shown beside file names
// exports setDirectory and isDirectory
import * as fs from "fs";
import handlebars = require('handlebars');
import { currentDirectory } from "../config";

var directory: string;
var folderPath: string = "../folder.png";
var downloadPath: string = "../download.png";

export function setDirectory(directParam: string)
{
    let pos: number = directParam.indexOf("/");
    pos = directParam.indexOf("/", pos + 1);
    directParam = directParam.substring(pos);
    
    directory = directParam;
}

export function isDirectory(name: string)
{
    let originalName: string = name;
    if(directory != "/" && directory !== undefined)
    {   
        //If not root directory, edit the paths
        folderPath = "../" + folderPath;
        downloadPath = "../" + downloadPath;
        name = "./dir/" + directory + "/" + name;
    }
    else{
        name = "./dir/" + name;
    }
    let isfile;

    var stat = fs.statSync(name);
    if (stat.isDirectory() === true)
    {
        isfile = false;
    }
    else if (stat.isDirectory() === false)
    {
        isfile = true;
    }

    if (isfile === undefined)
    {
       // console.log("undefined");
    }
    else if (!isfile)
    {
        //console.log("directory");
        return new handlebars.SafeString(`<img src="${folderPath}" alt="foldericon" width="20px" height="20px">&nbsp;<a href="./${originalName}/">${originalName}</a><br>`);
    }
    else
    {
        //console.log("file");
        return new handlebars.SafeString(`<a href="./${originalName}?download"><img src="${downloadPath}" alt="saveicon" width="20px" height="20px"></a>&nbsp;<a href="./${originalName}">${originalName}</a><br>`);
    }
}

