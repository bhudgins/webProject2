//sets up router and calls handlers
//exports router

import {Router} from "express";
import mw = require("./controllers");
import * as multer from "multer";
const upload = multer({dest: "./uploads/"});

let router: Router = Router();

router.post("/*", upload.single("file1"), mw.Upload);

router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);

export = router;
