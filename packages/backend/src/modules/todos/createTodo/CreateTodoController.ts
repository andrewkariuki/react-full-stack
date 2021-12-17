import { Todo } from "../../../entity/Todo";
import { BaseController } from "../../../controllers";
import { getRepository } from "typeorm";
import { Request, Response } from "express";

export class CreateTodoController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      const { name, description } = req.body;

      await todoRepository.save(
        todoRepository.create({
          name: name,
          description: description,
        })
      );

      return this.ok<any>(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
