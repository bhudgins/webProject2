import { Request,
         Response,
         NextFunction} from "express";
import * as fs from "fs";

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
        }
    })
}

export function pageNotFound(req: Request, res: Response, next: NextFunction)
{
    res.sendStatus(404);
    res.send("<h1>Page not Found</h1>");
}