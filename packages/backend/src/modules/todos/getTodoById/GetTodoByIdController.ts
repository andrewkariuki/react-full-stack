import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "../../../controllers";
import { Todo } from "../../../entity/Todo";

export class GetTodoByIdController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      const { id } = req.params;

      const todo = await todoRepository.findOne({ id: parseInt(id) });

      return this.ok<any>(res, todo);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
