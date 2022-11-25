/*
    Função para calcular o IMC
*/
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

/*
    Função para classificar o IMC
*/
function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso'
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else if (imc >= 40) {
        return 'Obesidade grave';
    }
}

/*
    Função main

    Quando está entre parenteses, ela é execultada e não é necessário chamar a função novamente
*/
(function () {
    const peso = 80;
    const altura = 1.80;

    const imc = calcularIMC(peso, altura);

    console.log(imc.toFixed(2))
    console.log(classificarIMC(imc));
})();