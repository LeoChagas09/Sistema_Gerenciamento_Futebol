export interface Campeonato {
  id_campeonato: number,
  id_tipo_fk: number,
  id_usuario_fk: number,
  nome_campeonato: string,
  data_campeonato: string,
  local_campeonato: string,
  //tipo_campeonato: TipoCampeonato
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
  campeonatos: Campeonato[];
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
