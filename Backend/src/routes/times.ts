import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const TimesRoutes = Router();

TimesRoutes.post('/', async (req, res) => {
  const { id_usuario_fk, id_campeonato, nome_time } = req.body;

  try {
    const times = await prisma.times.create({
      data: {
        id_usuario_fk,
        id_campeonato,
        nome_time,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(erroHandling(1, 'Error ao criar um novo time'));
  }

  return res.status(200).json(erroHandling(0, 'Time cadastrado com sucesso'));
});
