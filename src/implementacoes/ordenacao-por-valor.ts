import type { EstrategiaDeOrdenacao } from "../contratos/estrategia-de-ordenacao";
import type { Carta } from "../modelos/carta";

export class OrdenacaoPorValor implements EstrategiaDeOrdenacao {
  ordenar(cartas: Carta[]): Carta[] {
    return cartas.slice().sort((a, b) => a.comparar(b));
  }
}