import type { FilaDeJogadores } from "../contratos/fila-de-jogadores";
import type { Jogador } from "../modelos/jogador";

export class FilaEmArray implements FilaDeJogadores {

    private jogadores: Jogador[] = [];

    entrar(jogador: Jogador): void {
        this.jogadores.push(jogador);
    }

    proximo(): Jogador {
        const jogador = this.jogadores.shift();

        if (jogador == undefined) {
            throw new Error('A fila está vazia!');
        }

        return jogador;
    }

    estaVazia(): boolean {
        return this.jogadores.length == 0;
    }

    tamanho(): number {
        return this.jogadores.length;
    }
}