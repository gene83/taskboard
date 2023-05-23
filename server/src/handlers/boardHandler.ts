import { NextFunction, Request, Response } from "express";
import prisma from "../utils/prisma";

export const createBoard = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    if (!name) {
        return res.json(400);
    }

    const userId = req.user?.id;
    if (!userId) {
        return res.json(401);
    }

    const board = prisma.board.create({
        data: {
            name,
            userId
        }
    });

    res.json({ data: board });
  } catch (e) {
    next(e);
  }
};
