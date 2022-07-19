import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";

export class CampeonatoService {
  async create(
    id_tipo_fk: number,
    id_usuario_fk: number,
    nome_campeonato: string,
    data_campeonato: string,
    ) {
      const campeonato =
      await prisma.campeonato.create<Prisma.campeonatoCreateArgs>({
        data: {
          id_tipo_fk,
          id_usuario_fk,
          nome_campeonato,
          data_campeonato: new Date(data_campeonato),
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
      }
    });

    return campeonato;
  }
}
