import { Request,
         Response,
         NextFunction} from "express";

export function dirPage(req: Request, res: Response, next: NextFunction)
{

}

export function pageNotFound(req: Request, res: Response, next: NextFunction)
{
    res.sendStatus(404);
    res.send("<h1>Page not Found</h1>");
}