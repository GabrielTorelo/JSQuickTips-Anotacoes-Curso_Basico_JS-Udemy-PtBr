// Função para gerar um numero aleatório entre os valores das variáveis 'min' e 'max' que foram passados por um Objeto (Object)
function rand({min = 0, max = 1000}){ // Tratamento realizado caso não seja passado, algum ou os dois, valores para as variáveis 'min' e 'max'
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Assim como o 'Math.ceil(var)' arredonda o valor da variável 'var' para cima, o 'Math.floor(var)' faz o contrario, ou seja, arredonda o valor da variável 'var' para baixo 
}

const minMax = {
    min: 40,
    max: 50
}
console.log(rand(minMax))
console.log(rand({min: 846}))
console.log(rand({max: 5000}))
console.log(rand({}))

/**
 * Exemplo que gera um erro
 * 
 *      console.log(rand())
 * 
 * Gera um erro ao não passar um objeto (object) para a função 'rand', pois,
 * a função tenta desestruturar um objeto (object) nulo (null)
 */