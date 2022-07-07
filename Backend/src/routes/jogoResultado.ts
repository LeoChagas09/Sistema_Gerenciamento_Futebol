import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';
import isAuthenticated from '../middlewares/isAuthenticated';

export const JogoResultadoRoutes = Router();
const jogoController = new JogoController();

JogoResultadoRoutes.use(isAuthenticated);

JogoResultadoRoutes.post('/', jogoController.createJogoResultado);
