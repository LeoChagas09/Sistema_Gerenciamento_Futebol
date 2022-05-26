import { Router } from 'express';
import { prisma } from '../prisma';

export const LoginRoutes = Router();

LoginRoutes.post('/', async (req, res) => {
  const { login, senha } = req.body;

  const usuario = await prisma.usuarios.findMany({
    where: {
      email: login,
      senha,
    },
  });

  console.log(usuario);

  res.status(200).json('Usuario logado com sucesso');
});
