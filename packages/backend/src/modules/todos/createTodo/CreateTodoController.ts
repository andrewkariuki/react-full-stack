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
          userId: userId,
        })
      );

      return this.ok<any>(res, todos);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
