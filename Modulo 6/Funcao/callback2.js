const notas = [6.3, 1, 10, 9.7, 8.3, 5.7, 8.2, 0.6]

notas.forEach((nota, id) => { /**
                               * O ForEach percorre todo o array e retorna com
                               * parâmetro para uma função (function) 2 variaveis,
                               * uma representa o elemento ('element') do array
                               * (ou seja, o que está armazenado no array) e a 
                               * outra variável representa o índice (posição) onde
                               * está esse elemento ('element')
                               */
    console.log(`Id: ${id} | Nota: ${nota}`)
})

console.log('') // Quebra de linha

/**
 * Pegando o array 'notas' e gerando um novo array com os
 *  elemnetos do array 'notas' que são inferiores a '7'
 * 
 * Sem callback
 */
const notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7)
        notasBaixas1.push(notas[i]) // Inseri o elemento 'notas[i]' no array 'notasBaixas'
}
console.log(notasBaixas1)

console.log('') // Quebra de linha

// Com callback
const notasBaixas2 = notas.filter(nota => nota < 7)
/**
 * O método 'filter()' filtra os elementos de um array, com base em um determinado critério
 * 
 * Em outras palavras, o método 'filter()' envia um elemento do array como parâmetro para uma
 * função (function) e espera o retorno de um verdadeiro(true) ou falso (false) (No nosso caso,
 * na função fazemos uma verificação se 'nota < 7', retornando assim V ou F), recebendo verdadeiro
 * ('true') como retorno da função, o elemendo (element) é adiciona ao array, caso retorne falso
 * (false) o 'filter()' irá ignora-lo e não irá adiciona-lo ao array.
 * 
 *  # O 'filter()' não altera o array 'notas'!
 *  # Podemos também definir a função fora do 'filter()':
 *    ('notasMenoresQueSete = nota => nota < 7')
 */
console.log(notasBaixas2)