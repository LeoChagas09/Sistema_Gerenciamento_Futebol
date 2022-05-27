export type ErroType = 0 | 1;

export interface RetornoPadrao {
  error: ErroType; // 1 = error, 0 = sucesso
  mensagem: string;
}

export function erroHandling(error: ErroType, mensagem: string) {
  const retorno: RetornoPadrao = { error, mensagem };

  return retorno;
}
