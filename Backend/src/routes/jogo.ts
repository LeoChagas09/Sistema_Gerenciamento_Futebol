import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';

export const JogoRoutes = Router();
const jogoController = new JogoController();

JogoRoutes.post('/', jogoController.createJogo);
JogoRoutes.get('/', jogoController.find);
JogoRoutes.get('/campeonato/:id', jogoController.findByCampeonato);
JogoRoutes.get('/atualizar/:id', jogoController.updateStatusJogo);
