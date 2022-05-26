import { Router } from 'express';
import { LoginRoutes } from './login';

const routes = Router();

routes.use('/login', LoginRoutes);

export default routes;
