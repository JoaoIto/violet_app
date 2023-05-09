import { Router } from 'express';
import { HealthController } from '../controllers/health';

const healthRequests = Router();
const healthController = new HealthController();

healthRequests.get('/', (_, res) => res.json({ message: 'OK health' }));
healthRequests.get('/index', healthController.index);
healthRequests.get('/find', healthController.find);
healthRequests.post('/create/:id', healthController.create);
healthRequests.put('/update/:id', healthController.update);
healthRequests.delete('/delete/:id', healthController.destroy);

export default healthRequests;
