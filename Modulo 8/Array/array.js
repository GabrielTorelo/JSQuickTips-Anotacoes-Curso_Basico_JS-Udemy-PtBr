/**
 * Arrays na verdade são objetos! Porem, os arrays não organizam os
 * atributos a partir de chave:valor, ele armazena os seus atributos
 * (dados) a partir de um index (indexado: [ [0], [1], [2], [3], [4] ])
 * 
 *   # Arrays em JS são estruturas dinâmicas (crescem dinamicamente), diferente de
 *     outras linguagens
 * 
 *   # Arrays são estruturas heterogêneas, ou seja, não se tem restrição do tipo de dado
 *     armazenado no mesmo array ([Boolean, String, Number, Object, Array, ...]). Porém,
 *     as boas praticas em JS, nos dizem para trabalharmos com dados homogêneas dentro do
 *     mesmo array
 */
console.log(typeof Array, typeof new Array, typeof [])

let aprovados1 = new Array('Bia', 'Carlos', 'Anna') // Forma não recomendada de criar arrays!
console.log(aprovados1)

console.log('') // Quebra de linha

let aprovados2 = ['José', 'Rui'] // Notação Literal - Forma recomendada de se criar arrays
console.log(aprovados2)
console.log(aprovados2[0]) // Acessa o índece '0' do array e retorna o seu valor
console.log(aprovados2[1]) // Acessa o índece '1' do array e retorna o seu valor
console.log(aprovados2[2]) /**
                            * Retorna indefinido ('undefined'), pois, nenhum valor
                            * foi atribuído ao índice '2' do array
                            */

aprovados2[2] = 'João' // Atribui o valor 'João' ao índice '2' do array - FORMA NÃO USUAL!
aprovados2.push('Pedro') // FORMA MAIS USUAL
console.log(aprovados2[2], aprovados2[3]) /**
                                           * Acessa o índece '2' e '3' do array e retorna o 
                                           * seu valor
                                           */
console.log(aprovados2.length) // Retorna o tamanho do array 

aprovados2[9] = 'Patrícia' // Atribui o valor 'Patrícia' ao índice '9' do array
console.log(aprovados2) /**
                         * Todos os atributos entre os índices '3' e '9', como não foram
                         * atribuidos valores a eles, são atribuidos como indefinidos
                         * (undefined) no array
                         */
console.log(`Indefinido: ${aprovados2[5] === undefined} | nulo: ${aprovados2[5] === null}`)
aprovados2.sort() /**
                   * O método 'sort' ordena o array, tendo com base o algoritmo sort
                   *   
                   *   # O método 'sort' altera o array!
                   */
console.log(aprovados2)

delete aprovados2[1] /**
                      * Deleta o valor do índice '1' do array
                      * 
                      *   # NÃO ORDENA O ARRAY! Na posição '1' do array é 
                      *     atribuida como indefinida (undefined)
                      */
console.log(aprovados2)
console.log(aprovados2[2]) // O valor do índice 2, continua sendo 'Patrícia'

console.log('') // Quebra de linha

let aprovados3 = ['Matheus', 'Pedro', 'Albert']
aprovados3.splice(1, 1) /**
                         * O método 'splice' adiciona/remove ou remove e adiciona 
                         * elementos ao array
                         * 
                         *  # Remover elementos do array:
                         *    'array'.splice('índice', 'qtd de elementos a serem excluidos')
                         *          
                         *  # Removendo a adicionando elementos no array:
                         *    'array'.splice('índice', 'qtd de elementos a serem excluidos',
                         *    'valor do novo elemento 1', 'valor do novo elemento 2', '...')
                         */
console.log(aprovados3)
aprovados3.splice(0, 1, 'Sem nome1', 'Sem nome2')
console.log(aprovados3) /**
                         * Nota-se que o valor do índice '0' é excluido e o valor 'Sem nome1'
                         * é atribuido a ele. Nota-se também que o valor 'Sem nome2' é 
                         * atribuido ao próximo índice (nesse caso o índice '1'), movendo o
                         * valor 'Albert' para o próximo índice após ele (nesse caso o índice 
                         * '2')
                         */
aprovados3.splice(2, 0, 'Sem nome3') /* Não exclui nenhum valor, apenas move o valor do 
                                      * índice '2' para o próximo índice (nesse caso o 
                                      * índice '3') e adiciona o valor 'Sem nome3' ao
                                      * índice '2'
                                      */
console.log(aprovados3)