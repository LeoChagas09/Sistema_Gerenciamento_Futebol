import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';

export const JogoRoutes = Router();
const jogoController = new JogoController();

JogoRoutes.post('/', jogoController.createJogo);
JogoRoutes.get('/', jogoController.find);
