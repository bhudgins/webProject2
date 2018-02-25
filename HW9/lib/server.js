"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//sets up server
const config_1 = require("./config");
const app_1 = require("./app");
app_1.app.listen(config_1.serverPort);
console.log(`Listening on port ${config_1.serverPort}...`);
//# sourceMappingURL=server.js.map