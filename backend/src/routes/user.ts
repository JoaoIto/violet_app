import { Router } from 'express';
import { UserController } from '../controllers/user';

const userRequests = Router();
const userController = new UserController();

userRequests.get('/', (_, res) => res.json({ message: 'OK user' }));
userRequests.get('/index', userController.index);
userRequests.post('/create', userController.create);
userRequests.get('/find/:id', userController.find);
userRequests.put('/update/:id', userController.update);
userRequests.delete('/delete/:id', userController.destroy);

export default userRequests;
