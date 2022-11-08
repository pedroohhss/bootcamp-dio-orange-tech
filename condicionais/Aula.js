/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 4;
const precoGasolina = 5;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 8;
const distancia = 100;

let saida;

if (tipoCombustivel === 'Etanol') {
    saida = precoEtanol * (distancia/kmPorLitro);
} else if (tipoCombustivel === 'Gasolina') {
    saida = precoGasolina * (distancia/kmPorLitro);
}

console.log(saida);
