// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

console.log('') // Quebra de linha

// Ruduzindo o tamanho de uma função
// Armazenando uma funcao arrow em uma variavel // Arrow Function
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

console.log('') // Quebra de linha

// Retorno implícito
const subtracao = (a, b) => a - b // O símbolo '=>' significa uma arrow function; O '(a, b)' são os parametros da função; Já o 'a - b' é o que a função deve retornar.
console.log(subtracao(3, 2))

const imprimir2 = a => console.log(Math.pow(a, 2)) // Se tivermos apenas 1 variável é possivel reduzir ainda mais, retirando os parênteses
imprimir2(5)