// Função em JS é First-Class Object (ou Citizens)
// Higher-order function

// Criando uma função de forma literal
function fun1() { console.log('Fui chamado!') }

// Armazenando uma função em uma variável
const fun2 = function() { } /**
                            * Se passar o nome da função + os parênteses, 
                            * você estará invocando a função. Exemplo:
                            * console.log(fun2()) // Chama a função 'fun2'
                            */

// Armazenando uma função dentro de um vetor (array)
const array = [function(a, b) {return a + b}, fun1, fun2] /**
                                                           * Para armazenar uma função dentro de um
                                                           * vetor (array), você pode passar a função
                                                           * de forma direta 'function(a, b) {return a 
                                                           * + b}', chamar uma função literal ou 
                                                           * chama-lá a partir de uma variável que 
                                                           * recebeu uma função 
                                                           */
console.log(array[0](2,3)) // Executando uma função dentro de um array


// Amazenando uma função em um atributo de um objeto
const obj = {}
obj.falar = function() {return 'Oii'}
console.log(obj.falar()) /**
                          * Para invocar a função (function) é necessário passar o 'nome do objeto'
                          * + '.' + 'nome do atributo' + 'parênteses' (parênteses após o nome 
                          * do atributo), ficando assim 'objeto.atributo()'
                          */

// Passando uma função como paremetro de uma função
function run(fun) {
    fun() // Para invocar a função é necessário o uso dos parênteses
}
run(function() {console.log('Tchau')}) // Passando uma função literal

run(fun1) // Podemos também passar uma função (function) criada anteriormente

// Uma função (function) pode retornar/conter uma outra função (function)
function soma(a, b){
    return function somaDnv(c){
        console.log(a + b + c)
    }
}

soma(1,2)(4) /**
              * Como temos 2 funções (uma dentro da outra), é preciso passar
              * parâmetros para as duas, nesse caso 'soma(1,2)' é o parâmetro
              * da função (function) 'soma', já o '(4)' é o parâmetro para a
              * função (function) 'somaDnv'
              * 
              * // Também podemos fazer assim \\
              *   const dpsEuVejo = soma(1,2)
              *   dpsEuVejo(10)
              */