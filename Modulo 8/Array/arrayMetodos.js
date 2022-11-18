const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] /**
                                                            * Ao atribuir um array a uma 
                                                            * "variável" constante não 
                                                            * significa que o array em si
                                                            * é constante, significa apenas
                                                            * que a "variável" é constante e
                                                            * seu endereço de memória não
                                                            * poderá ser alterado 
                                                            */
pilotos.pop() // O método 'pop' remove o elemento do último índice do array e o retorna
console.log(pilotos)

pilotos.push('Verstappen') /**
                            * O método 'push' adiciona um novo elemento ao array e esse
                            * passa a ser o ÚLTIMO índice do array
                            */
console.log(pilotos)

pilotos.shift() // O método 'shift' remove o elemento do primeiro índice do array e o retorna
console.log(pilotos)

pilotos.unshift('Hamilton') /**
                             * O método 'unshift' adiciona um novo elemento ao array e esse
                             * passa a ser o PRIMEIRO índice do array
                             */
console.log(pilotos)

/**
 * O método 'splice', como dito no arquivo 'array.js', diciona/remove
 * ou remove e adiciona elementos ao array
 */

// Adicionando elementos ao array com o método 'splice' \\
pilotos.splice(2, 0, 'Bottas', 'Massa') // Sintaxe: 'array'.splice('índice', 0, '...', '...')
console.log(pilotos)

// Removendo elemento do array com o método 'splice' \\
pilotos.splice(3, 1) // Sintaxe: 'array'.splice('índice', 'qtd de elementos a serem excluidos')
console.log(pilotos)

// Removendo e adicionando um elemento ao array com o método 'splice' \\
pilotos.splice(0, 1, 'Piquet') /**
                                * Sintaxe: 'array'.splice('índice', 'qtd de elementos 
                                * a serem excluidos', 'valor do novo elemento')
                                */
console.log(pilotos)

console.log('') // Quebra de linha

const soAlguns1 = pilotos.slice(2) /**
                                    * O método 'slice' retorna um novo array, com os 
                                    * elementos de um array, a partir do índice passado
                                    * por parâmetro
                                    * 
                                    *   # Sintaxe: array.slice('índice inicio')
                                    */
console.log(soAlguns1) /**
                        * Nota-se que é retornado os elementos a
                        * partir do índice 2 do array 'pilotos'
                        */

const soAlguns2 = pilotos.slice(1, 4) /**
                                       * Também é possível delimitar, por 'índice início'
                                       * e 'índice fim', os elementos que são retornados
                                       * para o novo array (como o 'índice fim' está
                                       * limitando o array, o seu elemento não será
                                       * retornado para o novo array)
                                       * 
                                       *   # Sintaxe: array.slice('índice inicio', 'índice fim')
                                       */
console.log(soAlguns2) /**
                        * Nota-se que é retornado os elementos a
                        * partir do índice 1 até o índice 3 do
                        * array 'pilotos' (não retornando o
                        * elemento do índice 4)
                        */