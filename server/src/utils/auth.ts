import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

export const createJWT = (user: User) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET as Secret
  );

  return token;
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.json({ message: "Not Authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "Invalid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as Secret) as User;
    req.user = user;
    next();
  } catch (e) {
    console.error(e);
    res.status(401);
    res.json({ message: "Invalid token" });
  }
};
