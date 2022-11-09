/*
    3) Elabore um algoritmo que calcule o que deve 
    ser pago por um produto, considerando o preço 
    normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler 
    qual a condição de pagamento escolhida e efetuar 
    o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*
    Condições de Pagamento:
    1 = A vista Débito;
    2 = A vista no Dinheiro ou PIX;
    3 = Em duas vezes;
    4 = Acima de duas vezes;
*/

const precoEtiqueta = 100;
const condicaoPagamento = 4;

let precoFinal;

if(condicaoPagamento === 1) {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
} else if (condicaoPagamento === 2) {
    precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
} else if (condicaoPagamento === 3) {
    precoFinal = precoEtiqueta;
} else if (condicaoPagamento === 4) {
    precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
}

console.log(precoFinal);
