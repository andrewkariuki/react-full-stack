import { BaseController } from "../../../controllers";
import { Request, Response } from "express";
import { User } from "../../../entity/User";
import { getRepository } from "typeorm";
import { validateEmail } from "../../../utils";

export class CreateUserController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const userRepository = getRepository(User);
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      if (typeof data.name === "undefined") delete data.name;

      if (typeof data.email === "undefined") delete data.email;

      if (typeof data.email === "undefined") delete data.email;

      if (!data.name && !data.email) {
        return this.clientError(res, "Name, Email and Password are required.");
      }

      const validEmail = await validateEmail(data.email);

      if (!validEmail) {
        return this.clientError(res, "Enter a valid email.");
      }

      const isUser = await userRepository.findOne({ email: data.email });
      if (isUser) {
        return this.clientError(res, "User with that email exists.");
      }

      await userRepository.save(
        userRepository.create({
          email: data.email,
          password: data.password,
          name: data.name,
        })
      );

      return this.ok<any>(res);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
