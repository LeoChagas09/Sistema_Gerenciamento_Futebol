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

  async find(){
    const times = await prisma.times.findMany({
      orderBy: {
        nome_time: 'asc'
      },
    });

    return times;
  }

  async findByCampeonato(id: number) {
    const times = await prisma.times.findMany({
      where: {
        id_campeonato: id
      }
    });

    return times;
  }
}
