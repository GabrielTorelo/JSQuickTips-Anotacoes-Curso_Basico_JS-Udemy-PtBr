/**
 * Object.preventExtensions(objeto)
 * 
 *   # Impede que o objeto seja estendido, ou seja,
 *     não é possível acrescentar novos atributos ao
 *     objeto
 */
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
}) /**
    * Como o objeto 'produto' foi criado com o método 'Object.preventExtensions(objeto)',
    * não será possível acrescentar mais nenhum atributo no objeto, porém, ainda será
    * possível alterar e excluir os atributos já presentes nele 
    */

console.log('Extensível: ', Object.isExtensible(produto))
/**
 * O método 'Object.isExtensible(objeto)' testa se o objeto
 * passado por parâmetro pode ser estendido, retornando 'true'
 * ou 'false' (verdadeiro ou falso)
 */

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
console.log(produto) /**
                      * Nota-se que é possível alterar o valor do atributo 'nome',
                      * porem, não é possível criar um novo atributo ('descricao')
                      */

delete produto.tag
console.log(produto) /**
                      * É possível excluir um atributo previamente criado com
                      * o método 'Object.preventExtensions(objeto)'
                      */

/**
 * Object.seal(objeto)
 * 
 *   # Impede que sejam adicionados e excluidos novos atributos 
 *     ao objeto, porém, ainda é possivel alterar os valores dos
 *     atributos previamente criados
 *     
 *   # Dizemos que o objeto está selado
 */

console.log('') // Quebra de linha

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa) /**
                     *       Também é possivel criar desta forma:
                     * 
                     *          const pessoa = Object.seal({
                     *              nome: 'Carlos',
                     *              idade: 53
                     *          })
                     */

console.log('Selado: ', Object.isSealed(pessoa))
/**
 * O método 'Object.isSealed(objeto)' testa se o objeto
 * passado por parâmetro está selado, retornando 'true'
 * ou 'false' (verdadeiro ou falso)
 */

pessoa.sobreNome = 'Silva'
pessoa.idade = 36
delete pessoa.idade
console.log(pessoa) /**
                     * Nota-se que é possível alterar o valor do atributo 'nome',
                     * porem, não é possível criar um novo atributo ('sobreNome'),
                     * nem excluir um atributo previamente criado
                     */

console.log('') // Quebra de linha

/**
 * Object.freeze(objeto) // Visto anteriormente em 'objetosConstantes.js'
 * 
 *   # Congela um objeto, impedindo que os valores dos atributos sejam alterados,
 *     excluídos ou acrescentados novos atributos ao objeto
 * 
 *   # Object.freeze(objeto) = Object.seal(objeto) + 
 *     valores dos atributos constantes (writable: false)
 */

const curso = {
    nome: 'Curso Web Moderno',
    nota: 10
}
Object.freeze(curso) /**
                     *       Também é possivel criar desta forma:
                     * 
                     *          const curso = Object.freeze({
                     *              nome: 'Curso Web Moderno',
                     *              nota: 8
                     *          })
                     */

console.log('Congelado: ', Object.isFrozen(curso))
/**
 * O método 'Object.isFrozen(objeto)' testa se o objeto
 * passado por parâmetro está congelado, retornando 'true'
 * ou 'false' (verdadeiro ou falso)
 */

curso.link = 'https://www.udemy.com/...'
curso.nome = 'Curso Web Moderno Completo'
delete curso.nota
console.log(curso) /**
                     * Nota-se que não possível alterar, criar ou excluir
                     * um atributo previamente criado
                     */