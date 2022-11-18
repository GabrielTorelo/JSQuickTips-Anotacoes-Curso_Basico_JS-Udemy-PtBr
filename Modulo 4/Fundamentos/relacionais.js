/**
 *                                  Operadores relacionais
 * 
 *      // Via de regra SEMPRE usar o ESTRITAMENTE VERDADEIRO ou ESTRITAMENTE FALSO!!! //
 * 
 */

console.log('i:', '1' == 1) /**
                             * // VERDADEIRO \\
                             * 
                             * '==' é um operador relacional de comparação de igualdade,
                             * ou seja, está comparando se '1' é igual a "1" e retornado 
                             * verdadeiro (true) ou falso (false), nesse caso retornando 
                             * verdadeiro (true)
                             */

console.log('ii:', '1' === 1) /**
                               * // ESTRITAMENTE VERDADEIRO \\
                               * 
                               * Nesse caso retorna falso (false), pois, quando temos 3 iguais
                               * '===', ele testa além da igualdade, o tipo dos valores, logo,
                               * como o '1' é uma String e o "1" é um Number, eles não são iguais,
                               * retornando assim falso (false)
                               */

console.log('iii:', '3' != 3) /**
                               * // FALSO \\
                               * 
                               * '!=' é um operador relacional de comparação de diferença,
                               *  ou seja, está comparando se '3' é diferente de "3" e retornado 
                               * verdadeiro (true) ou falso (false), nesse caso retornando 
                               * falso (false)
                               */

console.log('iiii:', '3' !== 3) /**
                                 * // ESTRITAMENTE FALSO \\
                                 *
                                 * Nesse caso retorna verdadeiro (true), pois, quando temos 1 
                                 * diferente e 2 iguais '!==', ele testa além da diferença, 
                                 * o tipo dos valores, logo, como o '3' é uma String e o "3" 
                                 * é um Number, eles são diferentes, retornando assim verdadeiro
                                 * (true)
                                 */

console.log('iiiii:', 3 > 2) // '>' é um operador relacional de maior
console.log('iiiiii:', 3 < 2) // '<' é um operador relacional de menor
console.log('iiiiiii:', 3 >= 2) // '>=' é um operador relacional de maior ou igual
console.log('iiiiiiii:', 3 <= 2) // '<=' é um operador relacional de menor ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('iiiiiiiii:',d1 == d2)
console.log('iiiiiiiiii:',d1 === d2)
console.log('iiiiiiiiiii:', d1.getTime() === d2.getTime());

console.log('iiiiiiiiiiii:', undefined == null);
console.log('iiiiiiiiiiiii:', undefined === null);