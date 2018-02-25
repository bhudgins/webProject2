import {Router} from "express";
import mw = require("./controllers");
import { Request,
    Response,
    NextFunction} from "express";
import * as multer from "multer";
const upload = multer({dest: "./uploads/"});

let router: Router = Router();

router.post("/upload", upload.single("file1"), mw.Upload);

router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);

export = router;

/*req: Request, res:Response)=>{
    res.type("text/plain");
    res.send(`Uploaded ${req.file.originalname} to ${req.file.path}`);
  }*/