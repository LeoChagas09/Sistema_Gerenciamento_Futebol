import { Prisma } from "@prisma/client";
// import { erroHandling } from "../model/Errorhandling";
import { prisma } from "../prisma";
// import { TimesService } from "./TimesService";

// export type StatusJogo = 0 | 1 | 2; // 0 = Não Iniciado, 1 = Em Andamento e 2 = Jogos Finalizados
// export type StatusTime = 0 | 1; // 0 = Em Andamento, 1 = Times Cadastrados

export class CampeonatoService {
  async create(
    id_tipo_fk: number,
    id_usuario_fk: number,
    nome_campeonato: string,
    data_inicio_campeonato: string,
    data_final_campeonato: string,
    ) {
      const campeonato =
      await prisma.campeonato.create<Prisma.campeonatoCreateArgs>({
        data: {
          id_tipo_fk,
          id_usuario_fk,
          nome_campeonato,
          data_inicio_campeonato: new Date(data_inicio_campeonato),
          data_final_campeonato: new Date(data_final_campeonato),
        },
      })

      return campeonato;
    }

  async find() {
    const campeonato = await prisma.campeonato.findMany({
      include: {
        tipo_campeonato: true,
        usuarios: true,
      },
    });

    return campeonato;
  }

  async findByUser(id: number) {
    const campeonato = await prisma.campeonato.findMany({
      include: {
        tipo_campeonato: true,
        usuarios: true,
      },
      where: {
        id_usuario_fk: id
      },
      orderBy: {
        id_campeonato: 'asc',
      }
    });

    return campeonato;
  }


  // async updateStatusTime(id: number) {

  //   const service = new TimesService();

  //   const times = await service.findByCampeonato(id);

  //   let quantTimes: number = 0;

  //   times.forEach(times => {
  //     quantTimes++;
  //   })

  //   if(quantTimes % 2 == 0 && quantTimes >= 2) {

  //     const campeonato = await prisma.campeonato.update({
  //       where: {
  //         id_campeonato: id
  //       },
  //       data: {
  //         status_times: 1,
  //         status_jogo: 1
  //       }
  //     });

  //     return campeonato;
  //   } else {
  //     throw erroHandling(1, 'Erro por conta de ter times impares');
  //   }

  // }
}
