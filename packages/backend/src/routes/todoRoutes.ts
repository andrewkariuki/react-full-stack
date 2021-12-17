import { Application, Request, Response } from "express";
import { checkAuth } from "../middleware";
import {
  createTodoController,
  deleteTodoController,
  editTodoController,
  getAllTodosController,
  getTodoByIdController,
} from "../modules";
import { RoutesConfig } from "../shared";

export class TodoRoutes extends RoutesConfig {
  constructor(app: Application) {
    super(app, "TodoRoutes");
  }

  configureRoutes() {
    this.app
      .route("/todos")
      .get([checkAuth], (req: Request, res: Response) => getAllTodosController.execute(req, res))
      .post([checkAuth], (req: Request, res: Response) => createTodoController.execute(req, res));

    this.app
      .route("/todos/:id")
      .get([checkAuth], (req: Request, res: Response) => getTodoByIdController.execute(req, res))
      .put([checkAuth], (req: Request, res: Response) => editTodoController.execute(req, res))
      .delete([checkAuth], (req: Request, res: Response) => deleteTodoController.execute(req, res));

    return this.app;
  }
}
