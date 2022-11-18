// Função anônima dentro de uma constante \\
const soma = function (x, y){
    return x + y
}

// Utilizando de uma função anônima dentro de outra função \\
const imprimirResultado = function (a, b, op = soma){
    console.log(op(a, b))
}

const divisao = function (x, y){
    return x / y
}

imprimirResultado(3, 4) /**
                         * Como não foi passado uma função (function) por parâmetro para a
                         * variável 'op', ela foi assumida como a função (function) 'soma'
                         */
imprimirResultado(3, 4, divisao) /**
                                  * Nesse exemplo, estamos passando a função (function)
                                  * 'divisao' por parâmetro para a variável 'op', com isso,
                                  * a função (function) 'imprimirResultado' irá chamar a
                                  * função (function) 'divisao' e retornar o resultado
                                  */
imprimirResultado(3, 4, function (x, y){return x - y}) /**
                                                        * Podemos criar funções anônimas também 
                                                        * dentro da propria chamada da função 
                                                        * (function) 'imprimirResultado'
                                                        */
imprimirResultado(3,4, (x, y) => x * y) /**
                                         * Da mesma forma, podemos criar funções 
                                         * arrow (arrow function)
                                         */
const pessoa = {
    falar(){
        console.log('Oi');
    }
}

pessoa.falar()