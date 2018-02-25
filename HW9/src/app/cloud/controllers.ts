//The middleware functions 
//exports dirPage, pageNotFound, and Upload
import { Request,
         Response,
         NextFunction} from "express";
import * as fs from "fs";
import path = require("path");
import * as multer from "multer";
import {currentDirectory} from "../../config"
const upload = multer({dest: "./uploads/"});
var urlFileName: string = "";

//determines if the url is feasible; if so, determines if it is a File or Directory and whether or not to download
export function dirPage(req: Request, res: Response, next: NextFunction)
{
    urlFileName = "./dir" + req.path;
    let originalURL: string = req.originalUrl;

    fs.stat(urlFileName, (err, stats)=>{
        if(err){
            if (err.code == 'ENOENT')
            {
                //console.log("1");
                pageNotFound(req, res, next);
            }
        } 
        else{
            if(stats.isDirectory())
            {

                if (originalURL.charAt(originalURL.length-1) != "/")
                {
                    res.status(307);
                    res.redirect(originalURL + "/");
                }
                else {
                    fs.readdir(urlFileName, (err,entries)=>{
                        
                        if(err)
                        {
                            console.log(err);
                        }
                        else{
                            res.render("main.hb", {
                                currentDirectory1: originalURL,
                                entries: entries,
                            })  
                        }
                    })
                }
            }
            else if(stats.isFile())
            {
                if (req.query.download != undefined)
                {
                    let filename: string = urlFileName;
                    let placeToStart: number = filename.lastIndexOf("/");
                    if (placeToStart != -1)
                    {
                        filename = filename.substr(placeToStart + 1);
                    }
                    res.download(urlFileName, filename);
                }
                res.set("Content-Disposition", "inline");
                res.sendFile (urlFileName, { root:path.join(__dirname, "../../../")});
            }
        }
    })
}

export function pageNotFound(req: Request, res: Response, next: NextFunction)
{
    res.status(404);
    res.send("<h1>Page not Found</h1>");
}

export function Upload(req: Request, res: Response, next: NextFunction)
{
    //moves file from temp upload folder to dir
   
    fs.rename(req.file.path, urlFileName + req.file.originalname, (err) => {
        if(err)
            console.log(err);
    });
    res.redirect(currentDirectory);
}