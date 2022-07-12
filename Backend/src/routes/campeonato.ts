import { Router } from 'express';
import { CampeonatoController } from '../controllers/CampeonatoController';

export const CampeonatoRoutes = Router();
const campeonatoController = new CampeonatoController();

CampeonatoRoutes.post('/cadastrar', campeonatoController.create);

CampeonatoRoutes.get('/', campeonatoController.find);
