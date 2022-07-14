import * as bcrypt from 'bcrypt';
import authConfig from '../config/auth';
import { sign } from 'jsonwebtoken';
import { prisma } from '../prisma';
import { erroHandling } from '../model/Errorhandling';

export class UsuarioService {
  async create(nome: string, email: string, password: string) {

    const passwordHash = await bcrypt.hash(password, 8);

    const novoUsuario = await prisma.usuarios.create({
      data: { nome, email, senha: passwordHash },
    });

    const {senha, ...user} = novoUsuario;

    return user;
  }

  async find() {
    const usuarios = await prisma.usuarios.findMany({});
    return usuarios;
  }

  async login(email: string, password: string) {

    const usuario = await prisma.usuarios.findFirst({
      where: {
        email,
      },
    });

    if (!usuario) {
      throw erroHandling(1, 'email/senha inválidos');
    }

    const compareSenha = await bcrypt.compare(password, usuario.senha);

      if (!compareSenha) {
        throw erroHandling(1, 'Credenciais não encontradas');
      }

      const token = sign({
        id_usuario: String(usuario.id_usuario),
      }, String(authConfig.jwt.secret), {
        expiresIn: authConfig.jwt.expiresIn,
      });

      // const {senha, ...user} = usuario;


    return token;
  }
}
