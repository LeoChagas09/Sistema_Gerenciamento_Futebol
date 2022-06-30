import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { FeedbackService } from '../services/FeedbackService';

export class FeedbackController {
  async create(req: Request, res: Response) {
    try {
      const { id_tipo_feedback_fk, nome, email, mensagem } = req.body;

      const service = new FeedbackService();

      const feedback = await service.create(
        id_tipo_feedback_fk,
        nome,
        email,
        mensagem,
      );

      return res.json(feedback);
    } catch (error) {
      return res
        .status(400)
        .json(erroHandling(1, 'Error ao criar um novo feedback'));
    }
  }
}
