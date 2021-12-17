import { Application, Request, Response } from "express";
import { createUserController } from "../modules";
import { RoutesConfig } from "../shared";

export class UserRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, "UserRoutes");
  }

  configureRoutes() {
    this.app
      .route("/register")
      .post((req: Request, res: Response) => createUserController.execute(req, res));
    return this.app;
  }
}
