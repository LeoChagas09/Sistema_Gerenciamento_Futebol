import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { TimesService } from '../services/TimesService';


export class TimesController {
  async create(req: Request, res: Response) {
    try {
      const { id_usuario_fk, id_campeonato, nome_time } = req.body;

      const service = new TimesService();

      const time = await service.create(id_usuario_fk, id_campeonato, nome_time);

      res.json(time);

    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo time'));
    }
  }

  async find(req: Request, res: Response) {
    try {
      const service = new TimesService();

      const time = await service.find();

      res.json(time);

    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao buscar times'));
    }
  }

}
