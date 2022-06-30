import * as bcrypt from 'bcrypt';
import { prisma } from '../prisma';

export class UsuarioService {
  async create(nome: string, email: string, senha: string) {

    const passwordHash = await bcrypt.hash(senha, 8);

    const novoUsuario = await prisma.usuarios.create({
      data: { nome, email, senha: passwordHash },
    });

    return novoUsuario;
  }

  async find() {
    const usuarios = await prisma.usuarios.findMany({});
    return usuarios;
  }

  async login(email: string, senha: string) {

    const usuario = await prisma.usuarios.findFirst({
      where: {
        email,
      },
    });

    return usuario;
  }
}
