import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { User } from '../../../../entities/user';

const prisma = new PrismaClient();

type Data = {
    status: string;
    data?: User;
    message?: unknown;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await prisma.$connect();

    if (req.method === 'POST') {
        try {
            const { username, tagline, email, password, birthDate, country } =
                req.body;

            const userExists = await prisma.user.findUnique({
                where: {
                    email,
                },
            });

            if (userExists) {
                return res
                    .status(400)
                    .json({ status: 'error', message: 'User already taken.' });
            }

            const user = await prisma.user.create({
                data: {
                    username,
                    tagline,
                    email,
                    password,
                    birthDate,
                    country,
                },
            });

            console.log(user);

            return res.status(201).json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            res.status(400).json({
                status: 'error',
                message: error,
            });
        }
    }
}
