import { Request, Response } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { CampeonatoService } from '../services/CampeonatoService';
export class CampeonatoController {
  async create(req: Request, res: Response){

    try {
      const {
        id_tipo_fk,
        id_usuario_fk,
        nome_campeonato,
        data_inicio_campeonato,
        data_final_campeonato,
        status = false,
      } = req.body;

      const service = new CampeonatoService();

      const campeonato = await service.create(
        id_tipo_fk,
        id_usuario_fk,
        nome_campeonato,
        data_inicio_campeonato,
        data_final_campeonato,
        status,
        );

      res.json(campeonato);

    } catch (error) {
      return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo campeonato'));
    }
  }

  async find(req: Request, res: Response) {
    try {
      const service = new CampeonatoService();

      const campeonato = await service.find();

      res.json(campeonato);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new CampeonatoService();

      const campeonato = await service.findById(Number(id));

      res.json(campeonato);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }

  async findByUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new CampeonatoService();

      const campeonato = await service.findByUser(Number(id));

      res.json(campeonato);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao buscar os campeonatos'));
    }
  }

  async updateStatusTime(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const service = new CampeonatoService();

      const campeonato = await service.updateStatusTime(Number(id));

      res.json(campeonato);

    } catch (error) {
       return res
      .status(400)
      .json(erroHandling(1, 'Erro ao alterar status time e jogo'));
    }
  }
}
