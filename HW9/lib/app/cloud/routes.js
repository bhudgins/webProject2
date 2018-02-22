"use strict";
const express_1 = require("express");
const mw = require("./controllers");
let router = express_1.Router();
router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);
module.exports = router;
//# sourceMappingURL=routes.js.map