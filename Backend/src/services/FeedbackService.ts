import { feedback, tipo_feedback } from '@prisma/client';
import nodemailer from 'nodemailer';
import { prisma } from '../prisma';


type feedbacktype = feedback & {
  tipo_feedback:  tipo_feedback;
}

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '2e5256b53a076c',
    pass: '8732ace903ede0',
  },
});

export class FeedbackService {
  async create(
    id_tipo_feedback_fk: number,
    nome: string,
    email: string,
    mensagem: string,
  ) {
    const feedback = await prisma.feedback.create({
      data: {
        id_tipo_feedback_fk,
        nome,
        email,
        mensagem,
      },
      include: {
        tipo_feedback: true,
      },
    });

    this.sendMail(feedback);

    return feedback;
  }

  async sendMail({ nome, email, tipo_feedback, mensagem}: feedbacktype) {
    await transport.sendMail({
      from: `${nome} <${email}>`,
      to: ' QFute <QFute@contato.com>',
      subject: 'Novo Feedback',
      html: [
        `<div style= "font-family: sans-serif; font-size: 16px; color:#111;">`,
        `<p> Tipo de feedback: ${tipo_feedback.descricao}</p>`,
        `<p> Comentário: ${mensagem}</p>`,
      ].join('\n'),
    });
  }
}
