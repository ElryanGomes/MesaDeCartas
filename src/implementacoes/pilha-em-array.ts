import { PilhaDeCartas } from '../contratos/pilha-de-cartas';
import { Carta } from '../modelos/carta';

export class PilhaEmArray implements PilhaDeCartas {
    private cartas: Carta[] = [];

  empilhar(carta: Carta): void {
    this.cartas.push(carta);
}

  desempilhar(): Carta {
  if (this.estaVazia()) {
    throw new Error("Não é possível desempilhar de uma pilha vazia.");
  }
  return this.cartas.pop()!;
}

  topo(): Carta {
  if (this.estaVazia()) {
    throw new Error("Não é possível consultar o topo de uma pilha vazia.");
  }
  return this.cartas[this.cartas.length - 1];
}

  estaVazia(): boolean {
    return this.cartas.length === 0;
}

  tamanho(): number {
    return this.cartas.length;
}
}