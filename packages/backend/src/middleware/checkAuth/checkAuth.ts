import { NextFunction, Response, Request } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "../../config";

export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers.auth;
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret as string);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    // If token is not valid, respond with 401 (unauthorized)
    res.status(401).json({ error: "You need to login." });
    return;
  }

  const { userId, email } = jwtPayload;
  const newToken = jwt.sign({ userId, email }, config.jwtSecret as string, {
    expiresIn: "1h",
  });

  res.setHeader("token", newToken);

  next();
};
