import { NextFunction, Request, Response } from "express";
import { comparePasswords, createJWT, hashPassword } from "../utils/auth";
import * as userRepo from "../repos/userRepo";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    const hashed = await hashPassword(password);
    const user = await userRepo.createUser(username, hashed);
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    next(e);
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password } = req.body;
    const user = await userRepo.getByUsername(username);
    if (!user) return res.status(404);

    const isValid = await comparePasswords(password, user.password);
    // TODO send message for invalid passowrd.
    if (!isValid) {
        res.status(401);
        res.json({ message: "Not Authorized" })
    }

    const token = createJWT(user);
    res.json({ token })

  } catch (e) {
    next(e);
  }
};
