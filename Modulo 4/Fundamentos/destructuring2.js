const array = [10, 7, 9, 8] // Criando um Array com 4 posições

const [a] = array // Pegando o valor da posição 0 do vetor 'array' e atribuindo o valor dele a variável 'a'
console.log(a)

const [n1, , n3, , n5, n6 = 0] = array
console.log(n1, n3, n5, n6) /**
                             * Retorna indefinido (undefined) na variável 'n5', pois, não foi
                             * passado valor para ela (na prática seria assim: [n1 = 10,
                             * "n2" = 7, n3 = 9, "n4" = 8]). Não retorna indefinido (undefined) 
                             * para a variável 'n6', pois, o valor de 'n6' foi definido como 0,
                             * caso não fosse atribuído valor a ele
                             */

// Vetor (array) dentro de um vetor (array)
const arrayArray = [[, 8, 8], [9, 6, 8]]

const [, [, nota]] =arrayArray /**
                                * Neste caso, estamos ignorando a posição 0 do vetor (array) 
                                * principal, que no caso seria o vetor '[, 8, 8]' e pegando o 
                                * valor da posição 2 do 2º vetor '[9, 6, 8]' (posição 1 do 
                                * vetor principal), que é o valor '6'
                                */
console.log(nota)