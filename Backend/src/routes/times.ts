import { Router } from 'express';
import { TimesController } from '../controllers/TimesController';
import isAuthenticated from '../middlewares/isAuthenticated';

export const TimesRoutes = Router();
const timeController = new TimesController();

TimesRoutes.use(isAuthenticated);

TimesRoutes.post('/', timeController.create);
