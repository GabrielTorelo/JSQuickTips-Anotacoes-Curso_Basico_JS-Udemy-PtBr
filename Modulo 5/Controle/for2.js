/**
 * A estrutura 'for in' é também uma estrutura para percorrer um vetor. Essa estrutura nos
 * retornar, na variável pré definida (habitualmente usado 'i' como nome da variável), as 
 * posições (índices) do vetor (array)
 * 
 * No entanto, podemos usar o 'for in' para percorrer também um objeto!
 */

// Percorrendo um Vetor (Array) \\
const notas = [6.7, 9.2, 8.5, 10, 5.4]

for(let i in notas){ /**
                  * A variável 'i' eventualmente irá possir todas as
                  * posições (índices) do vetor (array)
                  */
    console.log(`Índice: ${i} Nota: ${notas[i]}`); /**
                                                    * Busca o valor da nota, ao ser passado a sua
                                                    * posição (índice), que está armazenada na variável 
                                                    * 'i' ('notas[i]').
                                                    */
}

console.log('') // Quebra de linha

// Percorrendo um Objeto (Object) \\
const pessoa = {
    id: 1,
    nome: 'Gabriel',
    idade: 21,
    peso: 67
}

for(let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}