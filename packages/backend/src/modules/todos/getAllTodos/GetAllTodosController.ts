import { Request, Response } from "express";
import { BaseController } from "../../../controllers";

export class GetAllTodosController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    // const todoRepository = getRepository(Todo);
    try {
      //   const { id } = req.query;

      return this.ok<any>(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
