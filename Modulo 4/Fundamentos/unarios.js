let num1 = 1
let num2 = 2

// Forma Pós Fixada \\
num1++ // '++' é um operador unário de incrementação, ou seja, incrementa 1 a variável 'num1'
console.log(num1)

num1-- // '--' é um operador unário de decrementação, ou seja, decrementa 1 a variável 'num2'
console.log(num1)

// Forma Pré Fixada \\
// ++num1 // --num2 // Tanto faz se o operador vem antes ou depois, porem, tem exeções...
// console.log(num1)

// Exeção na igualdade do uso de operadores Pré e Pós fixados
console.log(`Sou Verdadeiro ou Falso? ${++num1 === num2--}`) 
                                        /**
                                         * O retorno é verdadeiro, pois, o 'num2--', por estar na
                                         * forma pós fixada, foi executada após a comparação. Isso
                                         * ocorre devido a operação de comparação ter prioridade
                                         */

console.log(`Ainda sou Verdadeiro? ${num1 === num2}`)
                                        /**
                                         * Após a comparação entre as variáveis 'num1' e 'num2'
                                         * ocorrerem, a decrementação da variável 'num2' acontece.
                                         * Logo, comparando novamente as duas, temos o retorno 
                                         * falso (false)
                                         */