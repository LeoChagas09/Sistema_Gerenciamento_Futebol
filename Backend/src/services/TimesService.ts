import { prisma } from "../prisma";

export class TimesService {
  async create( id_usuario_fk: number, id_campeonato: number, nome_time: string) {

    const times = await prisma.times.create({
      data: {
        id_usuario_fk,
        id_campeonato,
        nome_time,
      },
    });

    return times;
  }

}
