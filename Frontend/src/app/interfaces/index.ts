export interface Campeonato {
  id_campeonato: number,
  id_tipo_fk: number,
  id_usuario_fk: number,
  nome_campeonato: string,
  data_inicio_campeonato: string,
  data_final_campeonato: string,
  status_jogo: boolean,
  status_times: boolean,
}

export interface CampeonatoTeste {
  nome_campeonato: string,
  data_inicio_campeonato: string,
  data_final_campeonato: string,
  TipoCampeonato: string,
}

export interface TipoCampeonato {
  id_tipo: number,
  nome_tipo: string,
}

export interface Feedback  {
  id_feedback: number;
  id_tipo_feedback_fk: number,
  nome: string,
  email: string,
  mensagem: string,
  // tipo_feedback: tipoFeedback,
}

export interface tipoFeedback {
  id_tipo_feedback: number,
  descricao: string
}

export interface Feedbacks {
  feedback: Feedback[];
}

export interface Campeonatos {
  campeonato: Campeonato[];
}


export interface Login {
  email: string;
  senha: string;
}

export interface novoUsuario {
  id_usuario: number;
  nome: string;
  email: string;
  senha: string;
}

export interface ContaNova {
  usuario: novoUsuario[];
}

export interface Time {
  id_time: number;
  nome_time: string
}

export interface Times {
  times: Time;
}

export interface Jogo {
  id_jogo: number;
  id_campeonato_fk: number
  data_ida: string;
  id_time_1_fk: number;
  id_time_2_fk: number;
  local_ida: string;
  data_volta: string;
  local_volta: string;
}

export interface Jogos {
  jogo: Jogo[];
}

export interface jogoResultado {
  id_jogo_resultado: number;
  id_jogo_fk: number;
  placar_time_1: string;
  placar_time_2: string;
}

export interface jogosResultado {
  jogoResultado: jogoResultado[];
}
