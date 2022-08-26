import { Router } from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import { CampeonatoRoutes } from './campeonato';
import { FeedbackRoutes } from './feedback';
import { JogoRoutes } from './jogo';
import { JogoResultadoRoutes } from './jogoResultado';
import { LoginRoutes } from './login';
import { TimesRoutes } from './times';
import { tipoCampeonatoRoutes } from './tipoCampeonato';
import { tipoFeedbackRoutes } from './tipoFeedback';

const routes = Router();

routes.use('/login', LoginRoutes);
routes.use('/tipoCampeonato', isAuthenticated, tipoCampeonatoRoutes);
routes.use('/tipoFeedback', isAuthenticated, tipoFeedbackRoutes);
routes.use('/campeonato', isAuthenticated, CampeonatoRoutes);
routes.use('/feedback',isAuthenticated, FeedbackRoutes);
routes.use('/jogo', isAuthenticated, JogoRoutes);
routes.use('/times',isAuthenticated, TimesRoutes);
routes.use('/jogoResultado', isAuthenticated, JogoResultadoRoutes);

export default routes;
