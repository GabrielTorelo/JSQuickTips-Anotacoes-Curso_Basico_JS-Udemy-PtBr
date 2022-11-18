const aprovados = ['Anna', 'Alonso', 'Pedro', 'Bruno']


aprovados.forEach(function(nome, indice, array, undefined){
    console.log(`${indice + 1}) ${nome} => [${array}] | ${undefined}`)
}) /**
    * O método 'forEach' funciona como um laço 'for'. Ele
    * irá percorrer todo o array e para cada elemento
    * encontrado dentro do array, será passado por
    * parâmetro para a função de callback, o valor e o
    * índice do elemento
    * 
    * 
    * Sintaxe: 'array'.forEach('função de callback')
    *    
    *    # Na 'função de callback' a primeira variável passada por
    *      parâmetro ('nome') sempre será o valor do elemento, a
    *      segunda variável passada por parâmetro ('indice') sempre
    *      será o indice do elemento, já a terceira variável passada
    *      por parâmetro ('array') sempre será o proprio array que
    *      originou a busca dos elementos.
    * 
    *    # Caso sejam passadas mais variáveis por parâmetro,
    *      além das 3 descritas acima (nesse caso a variável
    *      'undefined'), o retorno de cada variável será
    *      indefinido (undefined)
    */ 

// Como arrow function \\
aprovados.forEach(nome => console.log(nome))
aprovados.forEach((nome, indice) => console.log(indice + 1))

// Passando uma função pré criada para o método 'forEach' \\
const funcPreCriada = nome => console.log(nome)
aprovados.forEach(funcPreCriada)