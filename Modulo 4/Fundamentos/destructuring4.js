// Função para gerar um numero aleatório entre os valores das variáveis 'min' e 'max' que foram passados por um Vetor (Array)
function rand([min = 0, max = 1000]){ // Tratamento realizado caso não seja passado, algum ou os dois, valores para as variáveis 'min' e 'max'
    if (min > max) [min, max] = [max, min] // Criando um Vetor (Array) e trocando os valores das variáveis 'min' e 'max' entre ele, caso os valores sejam passados inversamente
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // Assim como o 'Math.ceil(var)' arredonda o valor da variável 'var' para cima, o 'Math.floor(var)' faz o contrario, ou seja, arredonda o valor da variável 'var' para baixo 
}

const vetor = [5,10] // Criando um Vetor (Array) propositalmente ordenado do menor para o maior
console.log(rand(vetor));

const vetor2 = [10,5] // Criando um Vetor (Array) propositalmente ordenado do maior para o menor
console.log(rand(vetor2));

const vetor3 = [965] // Criando um Vetor com apenas 1 posição
console.log(rand(vetor3)); // Como foi passado um Vetor (Array) com apenas 1 posição e ela foi assumida como o valor da variável 'min', o tratamento da função foi acionado, assumindo '1000' para a variável 'max'

const vetor4 = [, 965] // Criando um Vetor com 2 posições, porem, sendo a posição 0 indefinida (undefined)
console.log(rand(vetor4)); // Como foi passado um Vetor (Array) com a posição 0 indefinida (undefined), o tratamento da função foi acionado, assumindo '0' para a variável 'min'

const vetor5 = [] // Criando um Vetor vazio
console.log(rand(vetor5)); // Como foi passado um Vetor (Array) vazio, o tratamento da função foi acionado, assumindo '0' para a variável 'min' e '1000' para a variável 'max'

/**
 * Exemplo que gera um erro
 * 
 *      console.log(rand())
 * 
 * Gera um erro ao não passar um vetor (array) para a função 'rand', pois,
 * a função tenta desestruturar um vetor (array) nulo (null)
 */