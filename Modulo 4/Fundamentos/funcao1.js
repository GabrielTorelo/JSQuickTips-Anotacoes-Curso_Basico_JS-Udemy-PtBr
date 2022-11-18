// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Passando apenas o valor para 'a', o valor de 'b' será indefinido (undefined), sendo assim, ao somar um valor com um indefinido (undefined) o resultado será um não número (NaN)
imprimirSoma(2, 30, 4, 5, 6, 7, 8) // Passando valores além dos requisitados, irá ser pego os 2 primeiros valores (temos apenas 2 valores sendo requisitado no imprimirSoma) e atribuí-los à 'a' e 'b', os outros serão ignorados
imprimirSoma() // Não passando valores a função teremos um não número (NaN), pois, não é possivel somar de 2 indefinidos (undefined)

console.log('') // Quebra de linha

// Função com retorno
function soma(a, b = 0){ // A variavel 'b' foi tratada para caso não seja passado valor para ela, seu valor será 0 (padrão Ecma)
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // Como foi tratado, a função retorna 2
console.log(soma()) // Como não foi passado nada para a função, o retorno será não numero (NaN), pois, não é possivel soma 0 e indefinido (undefined)
