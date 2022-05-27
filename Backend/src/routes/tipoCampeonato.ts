import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const tipoCampeonatoRoutes = Router();

tipoCampeonatoRoutes.get('/', async (req, res) => {
  try {
    const tipoCampeonato = await prisma.tipo_campeonato.findMany();

    return res.status(200).json({ tipoCampeonato });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar o tipo de campeonato'));
  }
});
