import { Router } from 'express';
import { LoginRoutes } from './login';
import { tipoCampeonatoRoutes } from './tipoCampeonato';
import { tipoFeedbackRoutes } from './tipoFeedback';

const routes = Router();

routes.use('/login', LoginRoutes);
routes.use('/tipoCampeonato', tipoCampeonatoRoutes);
routes.use('/tipoFeedback', tipoFeedbackRoutes);

export default routes;
