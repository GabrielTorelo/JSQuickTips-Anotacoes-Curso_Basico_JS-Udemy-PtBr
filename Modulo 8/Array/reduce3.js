// Implementando um reduce \\
Array.prototype.reduce2 = function (callback, valorInicial){
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, atual) => acumulador && atual

const des1 = alunos.map(a => a.bolsista).reduce2(todosBolsistas)

console.log(des1)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual

const des2 = alunos.map(a => a.bolsista).reduce2(algumBolsista)

console.log(des2)