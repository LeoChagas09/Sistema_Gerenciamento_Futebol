import { Router } from 'express';
import { CampeonatoController } from '../controllers/CampeonatoController';
import isAuthenticated from '../middlewares/isAuthenticated';

export const CampeonatoRoutes = Router();
const campeonatoController = new CampeonatoController();

// CampeonatoRoutes.use(isAuthenticated);

CampeonatoRoutes.post('/cadastrar', campeonatoController.create);

CampeonatoRoutes.get('/', campeonatoController.find);
