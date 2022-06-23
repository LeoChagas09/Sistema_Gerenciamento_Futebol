import { Prisma } from '@prisma/client';
import { Router } from 'express';
import nodemailer from 'nodemailer';
import { erroHandling } from '../model/Errorhandling';
import { prisma } from '../prisma';

export const FeedbackRoutes = Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '2e5256b53a076c',
    pass: '8732ace903ede0',
  },
});

FeedbackRoutes.post('/', async (req, res) => {
  const { id_tipo_feedback_fk, nome, email, mensagem } = req.body;

  try {
    const tipo = await prisma.tipo_feedback.findFirst({
      where: {
        id_tipo_feedback: id_tipo_feedback_fk,
      },
    });

    const feedback = await prisma.feedback.create({
      data: {
        id_tipo_feedback_fk,
        nome,
        email,
        mensagem,
      },
    });

    await transport.sendMail({
      from: `${nome} <${email}>`,
      to: ' QFute <QFute@contato.com>',
      subject: 'Novo Feedback',
      html: [
        `<div style= "font-family: sans-serif; font-size: 16px; color:#111;">`,
        `<p> Tipo de feedback: ${tipo?.tipo_feedback}</p>`,
        `<p> Comentário: ${mensagem}</p>`,
      ].join('\n'),
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(erroHandling(1, 'Error ao criar um novo feedback'));
  }
  return res
    .status(200)
    .json(erroHandling(0, 'Feedback cadastrado com sucesso'));
});
