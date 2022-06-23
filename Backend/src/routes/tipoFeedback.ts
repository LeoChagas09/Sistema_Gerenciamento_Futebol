import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const tipoFeedbackRoutes = Router();

tipoFeedbackRoutes.get('/', async (req, res) => {
  try {
    const tipoFeedback = await prisma.tipo_feedback.findMany();

    return res.status(200).json(tipoFeedback);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar o tipo de feedback'));
  }
});
