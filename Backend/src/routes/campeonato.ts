import { Prisma } from '@prisma/client';
import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const CampeonatoRoutes = Router();

CampeonatoRoutes.post('/', async (req, res) => {
  const {
    id_tipo_fk,
    id_usuario_fk,
    nome_campeonato,
    data_campeonato,
    local_campeonato,
  } = req.body;

  try {
    const campeonato =
      await prisma.campeonato.create<Prisma.campeonatoCreateArgs>({
        data: {
          id_tipo_fk,
          id_usuario_fk,
          nome_campeonato,
          data_campeonato: new Date(),
          local_campeonato,
        },
      });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo campeonato'));
  }
  return res
    .status(200)
    .json(erroHandling(0, 'Campeonato cadastrado com sucesso'));
});

CampeonatoRoutes.get('/', async (req, res) => {
  try {
    const campeonato = await prisma.campeonato.findMany({
      include: {
        tipo_campeonato: true,
      },
    });

    return res.status(200).json(campeonato);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar o tipo de campeonato'));
  }
});
