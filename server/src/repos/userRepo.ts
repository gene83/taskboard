import prisma from '../utils/prisma';

export const createUserPrisma = async (username: string, password: string) => {
    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    return user;
}