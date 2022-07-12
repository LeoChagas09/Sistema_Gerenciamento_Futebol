import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';

export const JogoResultadoRoutes = Router();
const jogoController = new JogoController();

JogoResultadoRoutes.post('/', jogoController.createJogoResultado);
