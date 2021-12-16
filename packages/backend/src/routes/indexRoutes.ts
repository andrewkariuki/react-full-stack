import { Application, Request, Response } from "express";
import { RoutesConfig } from "../shared";

export class IndexRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, "IndexRoutes");
  }

  configureRoutes() {
    this.app.route("/").get((req: Request, res: Response) => {
      res.json({ re: 1232, req: 12 });
    });
    return this.app;
  }
}
