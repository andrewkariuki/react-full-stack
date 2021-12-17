import { Todo } from "../../../entity/Todo";
import { BaseController } from "../../../controllers";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { config } from "../../../config";

export class CreateTodoController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const todoRepository = getRepository(Todo);
    try {
      const token = <string>req.headers.auth;
      const jwtPayload = <any>jwt.verify(token, config.jwtSecret as string);
      const { userId } = jwtPayload;

      const { title, description } = req.body;

      const todos = await todoRepository.save(
        todoRepository.create({
          title: title,
          description: description,
          userId: userId,
        })
      );

      return this.ok<any>(res, todos);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
