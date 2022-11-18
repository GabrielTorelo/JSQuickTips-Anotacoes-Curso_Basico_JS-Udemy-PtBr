// Valor padrão do ES2015
function soma0(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log('=-=-= SOMA 0 =-=-=') // Inicio da separação

console.log(soma0()) /**
                      * Como não foi passado nenhum parâmetro para a função (function),
                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                      * 
                      * # O mesmo ocorreria se fosse passado indefinido ('undefined')
                      * como parâmetro
                      */

console.log(soma0(3)) /**
                       * Como foi passado apenas 1 parâmetro, ele foi assumido 
                       * para a variável 'a', já para as variáveis 'b' e 'c',
                       * como não foi passado por parâmetro valores à elas,
                       * foram assumidas como '1'
                       */

console.log(soma0(1,2,3)) // Retorna a soma dos valores passados por parâmetro

console.log(soma0(0, 0, 0)) // Retorna a soma dos valores passados por parâmetro

console.log(soma0(null, null, null)) /**
                                      * Como está sendo passado por parâmetro três
                                      * valores nulos ('null'), as variáveis 'a', 'b'
                                      * e 'c' são assumidas como '0'
                                      */

console.log('=-=-=-=--=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// Como era feito anteriormente ao ES2015\\

// #Estrategia1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('=-=-= LEGADO =-=-=') // Inicio da separação
console.log('=-=-= SOMA 1 =-=-=')

console.log(soma1()) /**
                      * Como não foi passado nenhum parâmetro para a função (function),
                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                      */

console.log(soma1(3)) /**
                       * Como foi passado apenas 1 parâmetro, ele foi assumido 
                       * para a variável 'a', já para as variáveis 'b' e 'c',
                       * como não foi passado por parâmetro valores à elas,
                       * foram assumidas como '1'
                       */

console.log(soma1(1,2,3)) // Retorna a soma dos valores passados por parâmetro

// Exemplo de erro \\
console.log(soma1(0, 0, 0)) /**
                             * Como está sendo passado por parametros três valores '0' 
                             * para as variáveis 'a', 'b' e 'c' (sendo '0' considerado 
                             * "falso" em uma operação logica), entra em ação a operação 
                             * lógica "ou" ('||') e é assumido o valor '1' para as três 
                             * variáveis ('a', 'b' e 'c')
                             */

console.log('=-=-=-=--=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// #Estrategia2 para gerar valor padrão
function soma2(a, b, c){
    a = a != undefined ? a : 1 // O operador '?' faz referência ao 'if'; Já o operador ':' faz referência ao 'else'
    b = b != undefined ? b : 1
    c = c != undefined ? c : 1
    return a + b + c
}

console.log('=-=-= LEGADO =-=-=') // Inicio da separação
console.log('=-=-= SOMA 2 =-=-=')

console.log(soma2()) /**
                      * Como não foi passado nenhum parâmetro para a função (function),
                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                      */

console.log(soma2(3)) /**
                       * Como foi passado apenas 1 parâmetro, ele foi assumido 
                       * para a variável 'a', já para as variáveis 'b' e 'c',
                       * como não foi passado por parâmetro valores à elas,
                       * foram assumidas como '1'
                       */

console.log(soma2(1,2,3)) // Retorna a soma dos valores passados por parâmetro

console.log(soma2(0, 0, 0)) // Retorna a soma dos valores passados por parâmetro

console.log(soma2(null, null, null)) /**
                                      * Como o nulo ('null') é '=' ao indefinido ('undefined'),
                                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                                      * 
                                      *  # Isso não iria ocorrer se utilizássemos do operador 
                                      *    estritamente diferente ('!=='), pois, não 
                                      *    englobaria o nulo ('null') já que o nulo ('null')
                                      *    não é estritamente igual ao indefinido ('undefined')
                                      */

console.log('=-=-=-=--=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// #Estrategia3 para gerar valor padrão
function soma3(a, b, c){
    a = 0 in arguments ? a : 1 /**
                                * Na pratica está sendo feita uma pergunta: É "verdadeiro"
                                * que no índice 0 possui argumentos('arguments')? 
                                * Se sim, a = a; Se não, a = 1
                                */
    b = 1 in arguments ? b : 1  // # índice 1
    c = 2 in arguments ? c : 1  // # índice 2
    return a + b + c
}

console.log('=-=-= LEGADO =-=-=') // Inicio da separação
console.log('=-=-= SOMA 3 =-=-=')

console.log(soma3()) /**
                      * Como não foi passado nenhum parâmetro para a função (function),
                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                      */

console.log(soma3(3)) /**
                       * Como foi passado apenas 1 parâmetro, ele foi assumido 
                       * para a variável 'a', já para as variáveis 'b' e 'c',
                       * como não foi passado por parâmetro valores à elas,
                       * foram assumidas como '1'
                       */

console.log(soma3(1,2,3)) // Retorna a soma dos valores passados por parâmetro

console.log(soma3(0, 0, 0)) // Retorna a soma dos valores passados por parâmetro

console.log(soma3(null, null, null)) /**
                                      * Como está sendo passado por parâmetro três
                                      * valores nulos ('null'), o objeto ('object') 
                                      * argumento ('arguments') os considera como
                                      * '0', sendo assim, as variáveis 'a', 'b' e 
                                      * 'c' são assumidas como '0'
                                      */

console.log('=-=-=-=--=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha

// #Estrategia4 para gerar valor padrão
function soma4(a, b, c){
    a = !isNaN(a) ? a : 1
    b = !isNaN(b) ? b : 1
    c = !isNaN(c) ? c : 1
    return a + b + c
}

console.log('=-=-= LEGADO =-=-=') // Inicio da separação
console.log('=-=-= SOMA 4 =-=-=')

console.log(soma4()) /**
                      * Como não foi passado nenhum parâmetro para a função (function),
                      * as variáveis 'a', 'b' e 'c' foram assumidas como '1'
                      */

console.log(soma4(3)) /**
                       * Como foi passado apenas 1 parâmetro, ele foi assumido 
                       * para a variável 'a', já para as variáveis 'b' e 'c',
                       * como não foi passado por parâmetro valores à elas,
                       * foram assumidas como '1'
                       */

console.log(soma4(1,2,3)) // Retorna a soma dos valores passados por parâmetro

console.log(soma4(0, 0, 0)) // Retorna a soma dos valores passados por parâmetro

console.log(soma4(NaN, NaN, NaN)) /**
                                    * Como está sendo passado por parâmetro três
                                    * valores não número ('NaN'), a função negada 
                                    * '!isNaN(var)' os considera como falsos ('false'),
                                    * sendo assim, as variáveis 'a', 'b' e 'c' são 
                                    * assumidas como '1'
                                    *
                                    *   # O mesmo ocorreria se fosse passado indefinido
                                    *     ('undefined') como parâmetro
                                    */

console.log('=-=-=-=--=-=-=-=-=') // Fim da separação
console.log('') // Quebra de linha