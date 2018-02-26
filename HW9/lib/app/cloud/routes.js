"use strict";
//sets up router and calls handlers
//exports router
const express_1 = require("express");
const mw = require("./controllers");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
let router = express_1.Router();
router.post("/*", upload.single("file1"), mw.Upload);
router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);
module.exports = router;
//# sourceMappingURL=routes.js.map