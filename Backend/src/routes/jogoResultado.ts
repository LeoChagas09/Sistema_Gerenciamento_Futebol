import { Router } from 'express';
import isAuthenticated from '../middlewares/isAuthenticated';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const JogoResultadoRoutes = Router();

JogoResultadoRoutes.use(isAuthenticated);

JogoResultadoRoutes.post('/', async (req, res) => {
  const { id_jogo_fk, id_time_fk } = req.body;

  try {
    const jogoTime = await prisma.jogo_resultado.create({
      data: {
        id_jogo_fk,
        id_time_fk,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Error ao inserir o resultado do jogo'));
  }
  return res
    .status(200)
    .json(erroHandling(0, 'Resultado do jogo cadastrado com sucesso'));
});
