import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { TimesService } from '../services/TimesService';


export class TimesController {
  async create(req: Request, res: Response) {
    try {
      const { nome_time } = req.body;

      const service = new TimesService();

      const time = await service.create( nome_time);

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

  // async findByCampeonato(req: Request, res: Response) {
  //   try {
  //     const { id } = req.params;

  //     const service = new TimesService();

  //     const times = await service.findByCampeonato(Number(id));

  //     res.json(times);

  //   } catch (error) {
  //      return res
  //     .status(400)
  //     .json(erroHandling(1, 'Erro ao buscar os times'));
  //   }
  // }

}
