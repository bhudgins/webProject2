"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });
function Upload(req, res) {
    upload.single("file1");
    res.type("text/plain");
    res.send(`Uploaded ${req.file.originalname} to ${req.file.path}`);
}
exports.Upload = Upload;
//# sourceMappingURL=upload.js.map