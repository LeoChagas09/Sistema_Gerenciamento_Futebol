import { prisma } from "../prisma";

export class JogoService {

  async createJogo(
    id_campeonato_fk: number,
    data_ida: Date,
    id_time_1_fk: number,
    id_time_2_fk: number,
    local_ida: string,
    data_volta: Date,
    local_volta: string,
    ){

    const jogos = await prisma.jogo.create({
      data: {
        id_campeonato_fk,
        data_ida: new Date(data_ida),
        id_time_1_fk,
        id_time_2_fk,
        local_ida,
        data_volta: new Date(data_volta),
        local_volta,
      },
    });

    return jogos;
  }

  async find() {
    const jogo = await prisma.jogo.findMany({
      include: {
        campeonato: true,
        time_1: true,
        time_2: true,
        jogo_resultado: true
      },
    });

    return jogo;
  }

  async findByCampeonato(id: number) {
    const jogo = await prisma.jogo.findMany({
      include: {
        campeonato: true,
        time_1: true,
        time_2: true,
        jogo_resultado: true,
      },
      where: {
        id_campeonato_fk: id
      },
    });

    return jogo;
  }

  async createJogoResultado(id_jogo_fk: number, placar_time_1: number, placar_time_2: number){

    const jogoResultado = await prisma.jogo_resultado.create({
      data: {
        id_jogo_fk,
        placar_time_1,
        placar_time_2,
      },
    });

    return jogoResultado;
  }

  async findJogoResultado() {
    const jogoResultado = await prisma.jogo_resultado.findMany();

    return jogoResultado;
  }

}
