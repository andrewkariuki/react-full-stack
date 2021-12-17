import { Request, Response } from "express";
import { Todo } from "../../../entity/Todo";
import { getRepository } from "typeorm";
import { BaseController } from "../../../controllers";

export class GetAllTodosController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      let todos;
      const query = Object.keys(req.query).length > 0;

      if (!query) {
        todos = await todoRepository.find();
      } else {
        if (req.query.sort && !req.query.limit && !req.query.skip) {
          todos = await todoRepository.find({ order: { id: (req.query as any).sort } });
        } else if (req.query.limit && !req.query.sort && !req.query.skip) {
          todos = await todoRepository.find({ take: (req.query as any).limit });
        } else if (req.query.limit && req.query.skip && !req.query.sort) {
          todos = await todoRepository.find({
            take: (req.query as any).limit,
            skip: (req.query as any).skip,
          });
        } else {
          return this.forbidden(res, "Query does not march.");
        }
      }

      return this.ok<any>(res, todos);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
