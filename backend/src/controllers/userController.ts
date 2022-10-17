import { Request, Response } from 'express';
import UserServices from '../services/userServices';

class UserController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const user = await UserServices.getUsers();
            return res.json({ data: user, status: 'sucess' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not complete your request',
                message: error,
            });
        }
    }

    async createUser(req: Request, res: Response) {
        try {
            const user = await UserServices.createUser(req.body);
            return res.json({ data: user, status: 'sucess' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not complete your request',
                message: error,
            });
        }
    }

    async getUserByEmail(req: Request, res: Response) {
        const userEmail = req.params.email;

        try {
            const user = UserServices.getUserbyEmail(userEmail);
            return res.json({ data: user, status: 'sucess' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not complete your request',
                message: error,
            });
        }
    }

    async updatePassword(req: Request, res: Response) {
        const userEmail = req.params.email;

        try {
            const user = UserServices.updatePassword(userEmail, req.body);
            return res.json({ data: user, status: 'sucess' });
        } catch (error) {
            return res.status(500).send({
                error: 'Could not complete your request',
                message: error,
            });
        }
    }
}

export default new UserController();
