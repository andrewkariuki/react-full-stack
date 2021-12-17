import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "../../../controllers";
import { Todo } from "../../../entity/Todo";

export class DeleteTodoController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      const { id } = req.params;

      const todo = await todoRepository.findOne({ id: parseInt(id) });

      const isTodo = !!todo;
      if (!isTodo) return this.clientError(res, "Todo not found");

      await todoRepository.delete({ id: parseInt(id) });

      return this.ok<any>(res, { success: "Todo DELETED" });
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
