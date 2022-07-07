import { prisma } from "../prisma";

export class JogoService {

  async createJogo(id_campeonato_fk: number, data_jogo: Date){

    const jogos = await prisma.jogo.create({
      data: {
        id_campeonato_fk,
        data_jogo: new Date(),
      },
    });

    return jogos;
  }

  async createJogoResultado(id_jogo_fk: number, id_time_fk: number){

    const jogoResultado = await prisma.jogo_resultado.create({
      data: {
        id_jogo_fk,
        id_time_fk,
      },
    });

    return jogoResultado;
  }

  async createJogoTime(id_time_fk: number){

    const jogoTime = await prisma.jogo_time.create({
      data: {
        id_time_fk,
      },
    });

    return jogoTime;
  }
}
