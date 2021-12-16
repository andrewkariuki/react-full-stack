import debug from "debug";
import express from "express";
import * as http from "http";
import { config } from "./config";
import { IndexRoutes } from "./routes";
import { RoutesConfig } from "./shared";

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const routes: Array<RoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes.push(new IndexRoutes(app));

const runningMessage = `Server running at http://localhost:${config.port}`;

server.listen(config.port, () => {
  routes.forEach((route: RoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
