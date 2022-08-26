import { Prisma } from "@prisma/client";
// import { erroHandling } from "../model/Errorhandling";
import { prisma } from "../prisma";
// import { TimesService } from "./TimesService";

// export type StatusJogo = 0 | 1; // 0 = Não Iniciado, 1 = Jogos Cadastrados
// export type StatusTime = 0 | 1; // 0 = Não Iniciado, 1 = Times Cadastrados

export class CampeonatoService {
  async create(
    id_tipo_fk: number,
    id_usuario_fk: number,
    nome_campeonato: string,
    data_inicio_campeonato: string,
    data_final_campeonato: string,
    status: boolean,
    ) {

      if(data_final_campeonato > data_inicio_campeonato){
        const campeonato =
        await prisma.campeonato.create<Prisma.campeonatoCreateArgs>({
          data: {
            id_tipo_fk,
            id_usuario_fk,
            nome_campeonato,
            data_inicio_campeonato: new Date(data_inicio_campeonato),
            data_final_campeonato: new Date(data_final_campeonato),
            status: status,
          },
        })

        return campeonato;
      }
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

  async findById(id: number) {
    const campeonato = await prisma.campeonato.findFirst({
      where: {
        id_campeonato: id,
      }
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


  async updateStatusTime(id: number) {

    const campeonato = await prisma.campeonato.update({
      where: {
        id_campeonato: id
      },
      data: {
        status: true,
      }
    });

    return campeonato;
  }
}
