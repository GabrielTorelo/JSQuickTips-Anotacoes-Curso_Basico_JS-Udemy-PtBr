/**
 * Variáveis definidas com 'let' tem:
 * escopo Global,
 * escopo de Função e
 * escopo de Bloco
 */

var numero = 1
var numero2 = 3
// let numero = 3 // Declarar a variável com 'let' e o mesmo nome, fora do escopo na qual foi definido anteriormente, não interfere em nada.
{
    let numero = 2
    console.log(`Dentro = ${numero}`) // Como a declaração de variável com 'let' tem escopo de bloco, o valor da variável 'numero' só será alterado dentro desse bloco

    console.log(`Dentro, buscando fora = ${numero2}`) // Como a variável 'numero2' não está definida dentro do escopo, o JS por padrão busca fora do escopo se existe a variável
}
console.log(`Fora = ${numero}`) // O valor da variável 'numero' é o valor na qual foi definido globalmente