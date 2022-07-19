import { prisma } from "../prisma";

export class JogoService {

  async createJogo(
    id_campeonato_fk: number,
    data_jogo: Date,
    id_time_1_fk: number,
    id_time_2_fk: number,
    local_jogo: string,
    ){

    const jogos = await prisma.jogo.create({
      data: {
        id_campeonato_fk,
        data_jogo: new Date(data_jogo),
        id_time_1_fk,
        id_time_2_fk,
        local_jogo
      },
    });

    return jogos;
  }

  async find() {
    const jogo = await prisma.jogo.findMany({
      include: {
        campeonato: true,
        times_jogo_id_time_1_fkTotimes: true,
        times_jogo_id_time_2_fkTotimes: true,
      },
    });

    return jogo;
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

}
