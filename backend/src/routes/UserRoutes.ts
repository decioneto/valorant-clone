import { Router } from 'express';
import UserController from '../controllers/userController';

const routes = Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/user', UserController.createUser);
routes.get('user/:email', UserController.getUserByEmail);
routes.put('user/:email', UserController.updatePassword);

export default routes;
