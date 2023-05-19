import { NextFunction, Request, Response } from "express"
import prisma from "../../db"
import { createJWT, hashPassword } from "./auth"

export const createNewUser = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: await hashPassword(req.body.password)
            }
        })

        const token = createJWT(user);
        res.json({ token })
    } catch (e) {
        next(e)
    }
}