import {Router} from "express";
import mw = require("./controllers");

let router: Router = Router();

router.get("/", mw.dirPage);
router.use("/../", mw.pageNotFound)
export = router;