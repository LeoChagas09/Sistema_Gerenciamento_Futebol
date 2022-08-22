import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { JogoService } from '../services/JogoService';

export class JogoController {
  async createJogo(req: Request, res: Response) {
    try {
      const { id_campeonato_fk, data_ida, id_time_1_fk, id_time_2_fk, local_ida, data_volta, local_volta} = req.body;

      const service = new JogoService();

      const jogo = service.createJogo(id_campeonato_fk, data_ida, id_time_1_fk, id_time_2_fk, local_ida, data_volta, local_volta);

      res.json(jogo);

    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo jogo'));
    }
  }

  async find(req: Request, res: Response) {
    try {
      const service = new JogoService();

      const jogo = await service.find();

      res.json(jogo);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }

  async findByCampeonato(req: Request, res: Response) {
    try {

      const { id } = req.params;

      const service = new JogoService();

      const jogo = await service.findByCampeonato(Number(id));

      res.json(jogo);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }

  async createJogoResultado(req: Request, res: Response){
    try {
      const { id_jogo_fk, placar_time_1, placar_time_2 } = req.body;

      const service = new JogoService();

      const jogoResultado = service.createJogoResultado(id_jogo_fk, placar_time_1, placar_time_2);

      res.json(jogoResultado);
    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao inserir o resultado do jogo'));
    }
  }

  async findJogoResultado(req: Request, res: Response) {
    try {
      const service = new JogoService();

      const jogo = await service.findJogoResultado();

      res.json(jogo);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }
}
