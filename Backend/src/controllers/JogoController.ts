import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { JogoService } from '../services/JogoService';

export class JogoController {
  async createJogo(req: Request, res: Response) {
    try {
      const { id_campeonato_fk, data_jogo} = req.body;

      const service = new JogoService();

      const jogo = service.createJogo(id_campeonato_fk, data_jogo);

      res.json(jogo);

    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo jogo'));
    }
  }

  async createJogoResultado(req: Request, res: Response){
    try {
      const { id_jogo_fk, id_time_fk } = req.body;

      const service = new JogoService();

      const jogoResultado = service.createJogoResultado(id_jogo_fk, id_time_fk);

      res.json(jogoResultado);
    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao inserir o resultado do jogo'));
    }
  }

  async createJogoTime(req: Request, res: Response) {
    try {
      const { id_time_fk } = req.body;

      const service = new JogoService();

      const jogoTime = service.createJogoTime(id_time_fk);

      res.json(jogoTime);
    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar o jogo do time'));
    }
  }

}
