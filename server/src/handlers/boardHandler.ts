import { NextFunction, Request, Response } from "express";
import prisma from "../utils/prisma"
import { Board, User } from "@prisma/client";

type RequestWithUser = Request & { user: User };

export const createBoard = (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        let board: Board = req.body;
        board = prisma.board.create({
            name: board.name,
            userId: req.user.id
        })
    
        res.json({ data: board });
    } catch (e) {
        next(e);
    }

}