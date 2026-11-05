import { Carta } from "../modelos/carta";
import type { FormatadorDeCarta } from "../contratos/formatador-de-carta";

export class FormatadorCompacto implements FormatadorDeCarta {


    formatar(carta: Carta): string {
        let valorCarta: string;

        switch (carta.valor) {
            case 1:
                valorCarta = "A";
                break;
            case 2:
                valorCarta = "2";
                break;
            case 3:
                valorCarta = "3";
                break;
            case 4:
                valorCarta = "4";
                break;
            case 5:
                valorCarta = "5";
                break;
            case 6:
                valorCarta = "6";
                break;
            case 7:
                valorCarta = "7";
                break;
            case 8:
                valorCarta = "8";
                break;
            case 9:
                valorCarta = "9";
                break;
            case 10:
                valorCarta = "10";
                break;
            case 11:
                valorCarta = "J";
                break;
            case 12:
                valorCarta = "Q";
                break;
            case 13:
                valorCarta = "K";
                break;
            default:
                valorCarta = "Valor inválido";
                break;
        }

        let naipeCarta: string;

        switch (carta.naipe) {
            case "Copas":
                naipeCarta = "♥";
                break;
            case "Espadas":
                naipeCarta = "♠";
                break;
            case "Ouros":
                naipeCarta = "♦";
                break;
            case "Paus":
                naipeCarta = "♣";
                break;
            default:
                naipeCarta = "Naipe inválido";
                break;
        }

        return `${valorCarta}${naipeCarta}`;
    }

}
