import { Request,
         Response,
         NextFunction} from "express";
import * as fs from "fs";
import path = require("path");


export function dirPage(req: Request, res: Response, next: NextFunction)
{
    let urlFileName: string = "./dir" + req.path;
    let originalURL: string = req.originalUrl;

    fs.stat(urlFileName, (err, stats)=>{
        if(err){
            if (err.code == 'ENOENT')
            {
                console.log("1");
                pageNotFound(req, res, next);
            }
        } 
        else{
            if(stats.isDirectory())
            {
                console.log(req.url);
                console.log(req.baseUrl);
                console.log(req.originalUrl);
                console.log(req.path);
                console.log(urlFileName);
                console.log(originalURL);
                console.log(req.query);
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
                                currentDirectory: originalURL,
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
                    //console.log(req.params);
                    //res.download(path, filename)
                    let filename: string = urlFileName;
                    let placeToStart: number = filename.lastIndexOf("/");
                    if (placeToStart != -1)
                    {
                        filename = filename.substr(placeToStart + 1);
                    }
                    res.download(urlFileName, filename);
                }
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