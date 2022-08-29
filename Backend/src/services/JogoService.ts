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
    status_jogo: boolean,
    ){

      if(data_volta >= data_ida) {

        const jogos = await prisma.jogo.create({
          data: {
            id_campeonato_fk,
            data_ida: new Date(data_ida),
            id_time_1_fk,
            id_time_2_fk,
            local_ida,
            data_volta: new Date(data_volta),
            local_volta,
            status_jogo: status_jogo,
          },
        });

        const jogoResultado = await prisma.jogo_resultado.create({
          data: {
            id_jogo_fk: jogos.id_jogo,
            placar_time_1: 0,
            placar_time_2: 0,
          },
        });

        return jogos || jogoResultado;
      }


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

  async updateStatusJogo(id: number) {

    const jogo = await prisma.jogo.update({
      where: {
        id_jogo: id
      },
      data: {
        status_jogo: true,
      }
    });

    return jogo;
  }

  async updateJogoResultado(id_jogo_fk: number, placar_time_1: number, placar_time_2: number){

    const jogoResultado = await prisma.jogo_resultado.updateMany({
      data: {
        placar_time_1: placar_time_1,
        placar_time_2: placar_time_2,
      },
      where: {
        id_jogo_fk: id_jogo_fk
      }
    });

    return jogoResultado;
  }

  async findJogoResultado() {
    const jogoResultado = await prisma.jogo_resultado.findMany();

    return jogoResultado;
  }

}
