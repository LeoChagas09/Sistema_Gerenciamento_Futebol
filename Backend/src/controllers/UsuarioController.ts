import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { erroHandling } from '../model/Errorhandling';
import { UsuarioService } from '../services/UsuarioService';
import authConfig from '../config/auth';

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

      const usuario = await service.login(email, senha);

      if (!usuario) {
        return res.status(404).json(erroHandling(1, 'Nenhum usuario existente'));
      }

      const compareSenha = await bcrypt.compare(senha, usuario.senha);

      if (!compareSenha) {
        return res.status(404).json(erroHandling(1, 'Credenciais não encontradas'));
      }

      const token = sign({}, authConfig.jwt.secret, {
        subject: String(usuario.id_usuario),
        expiresIn: authConfig.jwt.expiresIn,
      });

      return res.json({ usuario, token});

    } catch (error) {
      console.log(error);
      return res.status(400).json(erroHandling(1, 'Error ao logar'));
    }
  }
}
