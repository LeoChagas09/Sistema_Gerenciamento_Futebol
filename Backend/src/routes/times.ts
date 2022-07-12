import { Router } from 'express';
import { TimesController } from '../controllers/TimesController';

export const TimesRoutes = Router();
const timeController = new TimesController();

TimesRoutes.post('/', timeController.create);
