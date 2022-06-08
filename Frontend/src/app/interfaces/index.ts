export interface Campeonato {
  id_campeonato: number,
  id_tipo_fk: number,
  id_usuario_fk: number,
  nome_campeonato: string,
  data_campeonato: string,
  local_campeonato: string,
  tipo_campeonato: TipoCampeonato
}

export interface TipoCampeonato {
  id_tipo: number,
  nome_tipo: string,
}

export interface ListarCampeonato {
  campeonato: Campeonato[];
}
