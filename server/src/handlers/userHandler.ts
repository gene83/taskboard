import { NextFunction, Request, Response } from "express"
import { createJWT, hashPassword } from "../utils/auth"
import { createUserPrisma } from "../repos/userRepo"

export const createNewUser = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const { username, password } = req.body;
        const hashed = await hashPassword(password);
        const user = await createUserPrisma(username, hashed);
        const token = createJWT(user);
        res.json({ token })
    } catch (e) {
        next(e)
    }
}