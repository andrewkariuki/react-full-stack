import { BaseController } from "../../../controllers";
import { Request, Response } from "express";
import { User } from "../../../entity/User";
import { getRepository } from "typeorm";
import * as jwt from "jsonwebtoken";
import { config } from "../../../config";

export class LoginUserController extends BaseController {
  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    const userRepository = getRepository(User);
    try {
      const { password, email } = req.body;

      const user = await userRepository.findOne({
        where: { email },
        select: ["id", "password"],
      });
      const userExists = !!user;

      if (!userExists) return this.clientError(res, "User does not exist!");

      const validPassword = user.validatePassword(password);
      const isUser = !!validPassword;

      if (!isUser) return this.clientError(res, "Incorrect email or password!!");

      const token = jwt.sign({ userId: user.id, email: user.email }, config.jwtSecret as string, {
        expiresIn: "1h",
      });

      return this.ok<any>(res, token);
    } catch (err) {
      return this.fail(res, err.toString());
    }
  }
}
