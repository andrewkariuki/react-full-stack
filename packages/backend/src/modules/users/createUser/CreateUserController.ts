import { BaseController } from "../../../controllers";
import { Request, Response } from "express";
import { User } from "../../../entity/User";
import { getRepository } from "typeorm";

export class CreateUserController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const userRepository = getRepository(User);
    try {
      const { name, password, email } = req.body;

      await userRepository.save(
        userRepository.create({
          email: email,
          password: password,
          name: name,
        })
      );

      return this.ok<any>(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
