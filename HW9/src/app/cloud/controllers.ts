import { Request,
         Response,
         NextFunction} from "express";
import * as fs from "fs";
import path = require("path");

export function dirPage(req: Request, res: Response, next: NextFunction)
{
    let urlFileName: string = "./dir" + req.path;
    let directoryDisplay: string = req.originalUrl;

    fs.stat(urlFileName, (err, stats)=>{
        if(err){
            console.log(err);
        } 
        else{
            if(stats.isDirectory())
            {
                fs.readdir(urlFileName, (err,entries)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        res.render("main.hb", {
                            currentDirectory: directoryDisplay,
                            entries: entries,
                        })  
                    }
                })
                
            }
            else if(stats.isFile())
            {
                res.sendFile (urlFileName, { root:path.join(__dirname, "../../../")});
            }
        }
    })
}

export function pageNotFound(req: Request, res: Response, next: NextFunction)
{
    res.sendStatus(404);
    res.send("<h1>Page not Found</h1>");
}