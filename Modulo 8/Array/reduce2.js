const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => acumulador && atual

const des1 = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(des1)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual

const des2 = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(des2)