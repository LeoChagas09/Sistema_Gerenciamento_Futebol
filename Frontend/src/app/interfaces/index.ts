export interface Campeonato {
  id_campeonato: number,
  id_tipo_fk: number,
  id_usuario_fk: number,
  nome_campeonato: string,
  data_inicio_campeonato: string,
  data_final_campeonato: string,
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
  id_usuario_fk: number,
  id_campeonato: number,
  nome_time: string
}

export interface Times {
  time: Time[];
}
