import { Prisma } from '@prisma/client';
import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const FeedbackRoutes = Router();

FeedbackRoutes.post('/', async (req, res) => {
  const { id_tipo_feedback, nome, email, mensagem } = req.body;

  try {
    const feedback = await prisma.feedback.create<Prisma.feedbackCreateArgs>({
      data: {
        id_tipo_feedback,
        nome,
        email,
        mensagem,
      },
      include: {
        tipo_feedback: true,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo feedback'));
  }
  return res
    .status(200)
    .json(erroHandling(0, 'Feedback cadastrado com sucesso'));
});
