import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';
import { erroHandling } from '../model/Errorhandling';

export default function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if(!authHeader) {
    return res.status(401).json(erroHandling(1, 'JWT Token está faltando'));
  }

  //const [type, token] = authHeader.split(' ');
  const token = authHeader.split(' ')[1];

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    console.log(decodedToken);

    return next();
  } catch (error) {
    return res.status(401).json(erroHandling(1, 'JWT Token Invalido'));
  }
}
