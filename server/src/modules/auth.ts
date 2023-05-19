import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "@prisma/client";

export const comparePasswords = (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
}

export const hashPassword = (password: string) => {
    return bcrypt.hash(password, 12);
}

export const createJWT = (user: User) => {
    const token = jwt.sign(
        {id: user.id, username: user.username},
        process.env.JWT_SECRET as Secret
    )

    return token;
}