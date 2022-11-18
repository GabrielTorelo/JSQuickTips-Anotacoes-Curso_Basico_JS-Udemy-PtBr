// Função com o método normal \\
let comparaComThis = function (param){
    console.log(this == param)
}

comparaComThis(global) /**
                        * Retorna verdadeiro (true), pois, nesse contexto o a 
                        * palavra-chave 'this' aponta para o global
                        */

const obj = {}

comparaComThis = comparaComThis.bind(obj) // Amarrando a palavra-chave 'this' como o bojeto 'obj'
comparaComThis(global) /**
                        * Como a função (function) foi "amarrada" com o objeto 'obj',
                        * usando o método 'bind()', a palavra-chave 'this' não aponta 
                        * mais para o global, retornando falso (false)
                        */
comparaComThis(obj) // Retorna verdadeiro (true)

console.log('') // Quebra de linha

// Função com o método arrow \\
comparaComThisArrow = param => console.log(this == param)

comparaComThisArrow(global) /**
                             * Como a palavra-chave 'this' de uma arrow function é sempre
                             * referenciada ao contexto na qual foi criada, para o contexto
                             * global retornará falso (false) 
                             */
comparaComThisArrow(module.exports) /**
                                     * Retorna verdadeiro (true), pois, 'module.exports' é 
                                     * o contexto na qual foi criada a arrow function
                                     */

comparaComThisArrow = comparaComThisArrow.bind(obj) // Será que funciona?

comparaComThisArrow(obj) /**
                          * O método 'bind()' para "amarrar" uma função ('function') em um
                          * objeto ('object') NÃO FUNCIONA para uma arrow function
                          */
comparaComThisArrow(module.exports) /**
                                     * Uma arrow function sempre estará no contexto
                                     * do local na qual foi criada
                                     * 
                                     *  # Retorna verdadeiro (true), pois, 'module.exports' é 
                                     *    o contexto na qual foi criada a arrow function
                                     */