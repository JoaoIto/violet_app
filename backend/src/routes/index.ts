import { Router } from 'express';
import userRequests from './user';
import healthRequests from './health';

const routes = Router();

routes.use('/health', healthRequests);
routes.use('/user', userRequests);

routes.get('/greet', (_, res) => res.json({ message: 'Welcome to Violet' }));
routes.get('/status', (_, res) => res.json({ status: 'running' }));

export default routes;
