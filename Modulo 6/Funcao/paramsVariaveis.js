function soma() {/**
                  * Mesmo a função (function) não requisitando parâmetros, é
                  * possível passá-los e recuperá-los dentro da função (function) 
                  * usando o array 'arguments' (argumentos)
                  */
    let soma = 0
    for(i in arguments){
        soma += arguments[i] // Buscando todos os argumentos (arguments) passados que foram armazenados no vetor 'arguments'
    }

    return soma; // Retornando a soma de todos os parâmetros passados
}

console.log(soma()) // Passando nenhum parâmetro não irá possuir argumentos (arguments), retornando 0
console.log(soma(10)) // Retorna a soma os parâmetros passados
console.log(soma(10, 20, 30, 40)) // Retorna a soma dos parâmetros passados
console.log(soma(10, 90, ' Teste')) // Retorna a soma dos parâmetros passados + a concatenação com a string 'Teste'
console.log(soma(' Hoje', ' é dia ', 24)) /**
                                          * Retorna a concatenação das strings + a concatenação 
                                          * do valor '24'
                                          * 
                                          * # Como iniciamos a variável 'soma' com o valor '0',
                                          *   a concatenação ficará com um zero inicial, ou seja,
                                          *   '0 + strings + number'
                                          */