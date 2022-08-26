import { Router } from 'express';
import { JogoController } from '../controllers/JogoController';

export const JogoResultadoRoutes = Router();
const jogoController = new JogoController();

JogoResultadoRoutes.put('/atualizar/:id', jogoController.updateJogoResultado);
JogoResultadoRoutes.get('/', jogoController.findJogoResultado);
