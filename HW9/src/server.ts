import {serverPort } from "./config";
import { app } from "./app";

app.listen(serverPort);
console.log(`Listening on port ${serverPort}...`);
