import {Router} from "express";
import mw = require("./controllers");

let router: Router = Router();

router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);

export = router;