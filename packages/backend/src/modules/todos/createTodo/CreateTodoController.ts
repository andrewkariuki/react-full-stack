import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "../../../controllers";
import { Todo } from "../../../entity/Todo";

export class CreateTodoController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);

    try {
      const inputData = {
        title: req.body.title,
        description: req.body.description,
      };

      if (typeof inputData.title === "undefined") delete inputData.title;

      if (typeof inputData.description === "undefined") delete inputData.description;

      if (!inputData.title && !inputData.description) {
        return this.clientError(res, "Can not Title and Description are reqired.");
      }

      const todos = await todoRepository.save(
        todoRepository.create({
          title: inputData.title,
          description: inputData.description,
        })
      );

      return this.ok<any>(res, todos);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
