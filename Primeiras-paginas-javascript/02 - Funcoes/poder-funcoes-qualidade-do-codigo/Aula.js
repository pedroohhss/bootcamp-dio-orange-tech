/*
    Função para dizer o nome do usuário
*/
function sayMyName(name) {
    console.log('Your name is ' + name);
}


/*
    Função para saber a potência
*/
function quadrado(valor) {
    return valor * valor;
}

/*
    Função para calcular juros
*/
function juros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}


/*
    Função Main
*/
function main() {
    console.log('Programa Principal')
}