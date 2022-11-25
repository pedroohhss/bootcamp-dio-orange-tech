/*
    1 - Crie uma classe para representar carros
    Os carros possuem uma marca, cor e um gasto médio de combustível por quilômetro rodado.
    Crie um metódo que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso
*/

class Carro {

    marca;
    cor;
    gastoMedioKM;

    constructor(marca, cor, gastoMedioKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKM = gastoMedioKM;
    }

    calcularGastoPercurso(distanciaEmKm,precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKM * precoCombustivel;
    }

}

console.log('CARRO');
const uno = new Carro('Fiat', 'Branco', 1/12);
let saida = uno.calcularGastoPercurso(70,5);
console.log(saida.toFixed(2));

const palio = new Carro('Fiat', 'Preto', 1/10);
saida = palio.calcularGastoPercurso(70,5);
console.log(saida.toFixed(2));
console.log('');

/*
    2 - Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça a José para dizer o valor do seu IMC;
*/

class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else if (imc >= 40) {
            return 'Obesidade grave';
        }
    }
}

console.log('IMC');
const jose = new Pessoa('José', 70, 1.75);
const imc = jose.calcularIMC();
console.log(imc.toFixed(2));
console.log(jose.classificarIMC());

