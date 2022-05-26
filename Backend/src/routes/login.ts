import { Router } from 'express';

export const LoginRoutes = Router();

LoginRoutes.post('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Login' });
});
