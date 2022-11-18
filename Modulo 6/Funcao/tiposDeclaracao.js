console.log(soma(2, 5)) /**
                         * O interpretador o JS primeiro carrega as funções.
                         * Sendo assim, podemos chamar uma função ('function')
                         * antes de serem criadas no corpo do código
                         */
/**
 * O mesmo não ocorre ao tentar chamar uma 'function expression',
 * gerando um erro assim:
 * 
 *      console.log(sub(2, 5)) 
 */

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(2, 5))

// named function expression // Forma pouco usada
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(2, 5))