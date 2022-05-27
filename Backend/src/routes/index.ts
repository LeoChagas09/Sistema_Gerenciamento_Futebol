import { Router } from 'express';
import { CampeonatoRoutes } from './campeonato';
import { FeedbackRoutes } from './feedback';
import { JogoRoutes } from './jogo';
import { JogoResultadoRoutes } from './jogoResultado';
import { JogoTimeRoutes } from './jogoTime';
import { LoginRoutes } from './login';
import { TimesRoutes } from './times';
import { tipoCampeonatoRoutes } from './tipoCampeonato';
import { tipoFeedbackRoutes } from './tipoFeedback';

const routes = Router();

routes.use('/login', LoginRoutes);
routes.use('/tipoCampeonato', tipoCampeonatoRoutes);
routes.use('/tipoFeedback', tipoFeedbackRoutes);
routes.use('/campeonato', CampeonatoRoutes);
routes.use('/feedback', FeedbackRoutes);
routes.use('/jogo', JogoRoutes);
routes.use('/times', TimesRoutes);
routes.use('/jogoTime', JogoTimeRoutes);
routes.use('/jogoResultado', JogoResultadoRoutes);

export default routes;
