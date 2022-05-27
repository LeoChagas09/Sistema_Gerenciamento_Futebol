import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const JogoTimeRoutes = Router();

JogoTimeRoutes.post('/', async (req, res) => {
  const { id_time_fk } = req.body;

  try {
    const jogoTime = await prisma.jogo_time.create({
      data: {
        id_time_fk,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar o jogo do time'));
  }

  return res
    .status(200)
    .json(erroHandling(0, 'Jogo do time cadastrado com sucesso'));
});
