import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import debug from "debug";
import * as express from "express";
import * as expressWinston from "express-winston";
import * as helmet from "helmet";
import * as http from "http";
import "reflect-metadata";
import * as winston from "winston";
import { config } from "./config";
import { connectDB } from "./db";
import { TodoRoutes } from "./routes";
import { RoutesConfig } from "./shared";

connectDB().then(() => console.log("Database connection established."));

const app: express.Application = express();
const server: http.Server = http.createServer(app);

const routes: Array<RoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(compression());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new TodoRoutes(app));

const runningMessage = `Server running at http://localhost:${config.port}`;

server.listen(config.port, () => {
  routes.forEach((route: RoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
