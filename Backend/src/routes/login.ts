import { Router } from 'express';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const LoginRoutes = Router();

LoginRoutes.post('/', async (req, res) => {
  const { login, senha } = req.body;

  try {
    const usuario = await prisma.usuarios.findMany({
      where: {
        email: login,
        senha,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(erroHandling(1, 'Error ao logar'));
  }

  return res.status(200).json(erroHandling(0, 'Usuario logado com sucesso'));
});

LoginRoutes.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = await prisma.usuarios.create({
      data: { nome, email, senha },
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(erroHandling(1, 'Error ao cadastrar'));
  }

  return res
    .status(200)
    .json(erroHandling(0, 'Usuario cadastrado com sucesso'));
});
