// Objetos são coloções de chaves:valores \\
const pessoa = {
    nome: 'Rebeca',
    idade: 3,
    peso: 13
}

console.log(Object.keys(pessoa)) // O método 'Object.key(objeto)' retorna as chaves de um objeto
console.log(Object.values(pessoa)) // O método 'Object.values(objeto)' retorna os valores de um objeto
console.log(Object.entries(pessoa)) /**
                                     * O método 'Object.entries(objeto)' retorna um array 
                                     * com uma lista de chaves:valores de um objeto
                                     */

Object.entries(pessoa).forEach(([chave, valor]) => { // Percorre o array usando o método 'entries'
    console.log(`${chave}: ${valor}`);
}) /**
    * Como o método 'Object.entries(objeto)' retorna uma lista de
    * arrays chaves:valores de um objeto, usamos dessa propriedade
    * em conjunto com a tecnica de 'destructuring' para trazer o
    * conjunto chave:valor de cada atributo do objeto
    */

Object.defineProperty(pessoa, 'dataNascimento', { // Define um atributo com uma propriedade no objeto
    enumerable: true, /**
                       * Define se o atributo poderá ser listado ao usar o 
                       * método 'Object.key(objeto)' ou usando outro método
                       * qualquer, como um console.log(objeto). Em outras
                       * palavras, o 'enumerable' age com o Object.freeze(objeto),
                       * porem, 'congelando' apenas o atributo criado
                       */
    writable: false, // Define se o atributo poderá ser modificado
    value: '01/01/2019'// Define o valor desse atributo
})
pessoa.dataNascimento = '01/01/2022'
console.log(pessoa)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) /**
                                         * O método Object.assign(objeto1, objeto2, ...) pega os
                                         * atributos dos objetos passados por parâmetro e os contacena,
                                         * retornando em um novo objeto, nesse caso o objeto 'obj'
                                         */
console.log(obj) // Nesse caso o atributo 'a' ficou com o valor '4', pois foi sobrescrito