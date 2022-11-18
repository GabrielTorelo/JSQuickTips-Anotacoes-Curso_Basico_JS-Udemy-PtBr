// Pessoa aponta para um endereço de memória (pessoa -> 123 -> {...})
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro' /* Não muda a referencia da constante e sim o 
                       * dado presente no endereço de memoria 
                       */
console.log(pessoa)

/**
 * Exemplo de erro:
 * 
 * pessoa = {nome: 'Anna'} // Pessoa -> 456 -> {...}
 * 
 * Devido ao objeto 'pessoa' ser contante, gera um erro. 
 * O erro ocorre, pois, como estamos criando novo objeto 
 * 'pessoa', referenciado em um novo endereço de memória
 * e como o objeto 'pessoa' é uma constante, isso não é 
 * possível
 */

// Congelando um objeto (impedindo que seus valores sejam alterados)
Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC' // Após congelar um objeto não é possivel acrescentar atributos a ele
delete pessoa.nome // Também não é possível excluir atributos de um objeto congelado
console.log(pessoa)

const pessoaConst = Object.freeze({nome: 'Gabriel'}) // Cria um objeto "constante" (congelado)
pessoaConst.nome = 'José'
console.log(pessoaConst);