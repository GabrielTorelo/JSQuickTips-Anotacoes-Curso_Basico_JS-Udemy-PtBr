/**
 * Mapeia um array para um outro array, do mesmo tamanho, com os dados transformados.
 * Ou seja, tendo um 'array1' de tamanho X, ao mapea-lo e transforma-lo em um 'array2
 * (exemplo: 'array2'= 'array1' * 2), o tamanho do 'array2' será também X, com os seus
 * dados transformados (seguindo a métrica que foi passada).
 */

const nums1 = [1, 2, 3, 4, 5]

// For com propósito \\
const nums2 = nums1.map(element => element * 2) /**
                                                 * Internamente o método 'map' tem um método 'for'
                                                 * que fará uma trasnformação em cada dado presente
                                                 * no array, essa transformação irá seguir a métrica
                                                 * que foi passada para a 'função de callback' do
                                                 * método 'map'
                                                 * 
                                                 *   # Sintaxe: 'Array2' = 'Array1'.map('função de 
                                                 *     callback')
                                                 * 
                                                 *   # O método 'map' cria um NOVO array modificado
                                                 *     (com as méticas que foram passadas para a
                                                 *     'função de callback'), não alterado o array
                                                 *     inicialmente mapeado
                                                 */

const nums3 = nums1.map(function(element) { 
    return element * 2
}) /**
    * Também é possível utilizar como 'função
    * de callback' uma função não arrow
    */

console.log(nums1, nums2, nums3) /**
                                  * Retorna um array de mesmo tamanho, seguindo
                                  * a métrica que foi passada para a função
                                  * callback do método 'map'
                                  */

// Função que soma 10 a cada elemento do array \\
const soma10 = element => element + 10

// Função que retorna o triplo de cada elemento do array \\
const triplo = element => element * 3

// Função que retorna o elemento modificado para reais (moeda BRL) \\
const paraDinheiro = element => `R$ ${parseFloat(element).toFixed(2).replace('.', ',')}`

// Passando as 3 funçãoes de modo encadeado \\
const nums4 = nums1.map(soma10).map(triplo).map(paraDinheiro)

console.log(nums4) /**
                    * Nesse caso, primeiro é feito o mapeamento e transformação 
                    * usando a 'função de callback' 'soma10', logo após, usando
                    * a função 'triplo' (mapeando e transformando também) e em
                    * seguida a função 'paraDinheiro'
                    */