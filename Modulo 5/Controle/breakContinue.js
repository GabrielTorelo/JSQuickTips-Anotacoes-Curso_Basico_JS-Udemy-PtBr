/**
 *       // INSTRUÇÕES LEGADAS!!! \\
 *         # NÃO RECOMENDADO O USO
 */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

for(let i in nums){
    if(i == 5){
        break /**
               * Como a instrução de pausa (break) não age sobre o bloco 'if', ela irá agir
               * sobre o bloco 'for', parando a varredura do array (saindo do laço 'for')
               */
    }
    console.log(`Índice ${i}: ${nums[i]}`)
}

console.log('') // Quebra de linha

for(let i in nums){ /**
                     * Como eu defini a variável 'i' anteriormente como let,
                     * ela não possui escopo global, logo, posso definir
                     * uma nova variável com o nome 'i' sem problema
                     */
    if(i == 5){
        continue /**
                  * Como a instrução de 'continue' (prossiga) não age sobre o bloco 'if', 
                  * ela irá agir sobre o bloco 'for', interrompendo a execução atual (ou seja, 
                  * interrompendo o 'for' quando o índice do 'array' for '5'. Que na pratica 
                  * significa a parada do laço, não executando o 'console.log(...)') e indo 
                  * diretamente para a proxima execução (não saindo do laço 'for').
                  */
    }
    console.log(`Índice ${i}: ${nums[i]}`)
}