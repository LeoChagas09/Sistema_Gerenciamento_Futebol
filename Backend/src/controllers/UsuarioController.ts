import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { erroHandling } from '../model/Errorhandling';
import { UsuarioService } from '../services/UsuarioService';


export class UsuarioController {
  async create(req: Request, res: Response) {
    try {
      const { nome, email, senha } = req.body;

      const service = new UsuarioService();

      const novoUsuario = service.create(nome, email, senha);

      return res.json(novoUsuario);

    } catch (error) {
      return res.status(400).json(erroHandling(1, 'Error ao cadastrar'));
    }
  }

  async find(req: Request, res: Response) {
    try {
      const service = new UsuarioService();

      const usuarios = await service.find();

      return res.json(usuarios);

    } catch (error) {
      return res
        .status(400)
        .json(erroHandling(1, 'Error ao buscar um usuario'));
    }
  }

  async login(req: Request, res: Response) {

    try {
      const { email, senha } = req.body;

      const service = new UsuarioService();

      const token = await service.login(email, senha);

      if (!token) {
        return res.status(404).json(erroHandling(1, 'email/senha inválidos'));
      }

      return res.json({token});

    } catch (error) {
      return res.status(400).json(erroHandling(1, 'Error ao logar'));
    }
  }
}
