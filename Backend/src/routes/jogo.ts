import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const JogoRoutes = Router();

JogoRoutes.post('/', async (req, res) => {
  const { id_campeonato_fk, data_jogo } = req.body;

  try {
    const jogos = await prisma.jogo.create({
      data: {
        id_campeonato_fk,
        data_jogo: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(erroHandling(1, 'Error ao criar um novo jogo'));
  }

  return res.status(200).json(erroHandling(0, 'Jogo cadastrado com sucesso'));
});
