import { Router } from 'express';
import { TimesController } from '../controllers/TimesController';

export const TimesRoutes = Router();
const timeController = new TimesController();

TimesRoutes.get('/', timeController.find);
// TimesRoutes.get('/campeonato/:id', timeController.findByCampeonato);
TimesRoutes.post('/', timeController.create);
