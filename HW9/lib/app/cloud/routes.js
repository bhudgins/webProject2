"use strict";
const express_1 = require("express");
const mw = require("./controllers");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
let router = express_1.Router();
router.post("/upload", upload.single("file1"), mw.Upload);
router.use("/../", mw.pageNotFound);
router.use("/", mw.dirPage);
module.exports = router;
/*req: Request, res:Response)=>{
    res.type("text/plain");
    res.send(`Uploaded ${req.file.originalname} to ${req.file.path}`);
  }*/ 
//# sourceMappingURL=routes.js.map