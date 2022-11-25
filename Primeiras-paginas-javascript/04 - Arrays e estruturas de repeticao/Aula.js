
const alunos = ['João', 'Vitor', 'Maria'];

alunos.push('Pedro');
alunos[4] = 'Vinicius';
console.log(alunos);

alunos[4] = 'Laura';
console.log(alunos);
const aluno = alunos.pop();
const aluno2 = alunos.shift();
console.log(alunos);
console.log(aluno);
console.log(aluno2);


const notas = [];

notas.push(5);
notas.push(4);
notas.push(8);
notas.push(9);
notas.push(6);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

console.log(soma / notas.length);