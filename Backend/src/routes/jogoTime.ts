import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';

export const JogoTimeRoutes = Router();
const jogoController = new JogoController();

JogoTimeRoutes.post('/', jogoController.createJogoTime);
