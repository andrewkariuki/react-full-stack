import { Application, Request, Response } from "express";
import { checkAuth } from "../middleware";
import { createTodoController } from "../modules/todos";
import { RoutesConfig } from "../shared";

export class TodoRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, "TodoRoutes");
  }

  configureRoutes() {
    this.app
      .route("/todos")
      .get()
      .post([checkAuth], (req: Request, res: Response) => createTodoController.execute(req, res));

    return this.app;
  }
}
