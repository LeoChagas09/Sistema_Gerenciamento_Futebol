import { Router } from 'express';
import { CampeonatoRoutes } from './campeonato';
import { FeedbackRoutes } from './feedback';
import { LoginRoutes } from './login';
import { tipoCampeonatoRoutes } from './tipoCampeonato';
import { tipoFeedbackRoutes } from './tipoFeedback';

const routes = Router();

routes.use('/login', LoginRoutes);
routes.use('/tipoCampeonato', tipoCampeonatoRoutes);
routes.use('/tipoFeedback', tipoFeedbackRoutes);
routes.use('/campeonato', CampeonatoRoutes);
routes.use('/feedback', FeedbackRoutes);

export default routes;
