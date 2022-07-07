import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';
import isAuthenticated from '../middlewares/isAuthenticated';

export const JogoTimeRoutes = Router();
const jogoController = new JogoController();

JogoTimeRoutes.use(isAuthenticated);

JogoTimeRoutes.post('/', jogoController.createJogoTime);
