import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "../../../controllers";
import { Todo } from "../../../entity/Todo";

export class EditTodoController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      const { id } = req.params;

      const updateData = {
        title: req.body.title,
        description: req.body.description,
        complete: req.body.complete,
      };

      if (typeof updateData.title === "undefined") delete updateData.title;

      if (typeof updateData.description === "undefined") delete updateData.description;

      if (typeof updateData.complete === "undefined") delete updateData.complete;

      console.log(updateData);

      if (!updateData.title && !updateData.description && !updateData.complete) {
        return this.clientError(res, "Can not update empty parameter.");
      }

      const todo = await todoRepository.findOne({ id: parseInt(id) });

      const isTodo = !!todo;
      if (!isTodo) return this.clientError(res, "Todo not found");

      const update = await todoRepository.update(
        {
          id: parseInt(id),
        },
        updateData
      );

      return this.ok<any>(res, update);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
