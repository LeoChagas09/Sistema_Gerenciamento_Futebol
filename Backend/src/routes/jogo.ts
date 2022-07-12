import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

export const JogoRoutes = Router();
const jogoController = new JogoController();

JogoRoutes.use(isAuthenticated);

JogoRoutes.post('/', jogoController.createJogo);
