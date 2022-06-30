export interface Feedback {
  id_tipo_feedback_fk: TipoFeedback;
  nome: string;
  email: string;
  mensagem: string;
  tipo_feedback: TipoFeedback;
}

export interface TipoFeedback {
  id_tipo_feedback: number;
  tipo_feedback: string;
}
