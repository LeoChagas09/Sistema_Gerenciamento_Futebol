import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

export const LoginRoutes = Router();
const usuarioController = new UsuarioController();

LoginRoutes.get('/', usuarioController.find);
LoginRoutes.post('/', usuarioController.login);
LoginRoutes.post('/cadastro', usuarioController.create)
