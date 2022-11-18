/**
 * // Switch \\
 * 
 * # É uma seleção múltipla
 * # Não é uma expresão relacional 
 *   (ou seja, que retorna true ou false)
 * # Sem a instrução 'break' executa todos os outros 'case's abaixo
 */

const imprimirResultado = nota => {
    switch(Math.floor(nota)){ // A função 'Math.floor(var)' arredonda o valor de variável 'var' para baixo
        case 10: /**
                  * O 'case 10' está vazio, porém, como não temos a instrução 'break' (pausa),
                  * o 'case' não pausa/termina e vai para a instrução do proximo 'case',
                  * no caso o 'case 9'
                  * 
                  * Como o 'case 10' irá retornar a mesma coisa que o 'case 9', ficaria
                  * repetido colocar [console.log('Quadro de Honra')] no 'case 10' também,
                  * por esse motivo é mais vantajoso deixar ele ir para o proximo case
                  */
         // console.log('Deixei ir para o proximo case')
        case 9: 
            console.log('Quadro de Honra')
            break /**
                   * Instrução de pausa (break), ao entra nessa liha de código, 
                   * a varredura 'switch' é pausada e terminada
                   */
        case 8:
        case 7: { // Não é necessário o uso das chaves '{}', porém, seu uso não interfere em nada
            console.log('Aprovado')
            break
        }
        case 6: case 5: case 4: // Podemos apresentar na mesma linha múltiplos 'case's ('case's nas quais terão as mesmas funções que os próximos)
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: /**
                  * O caso (case) 'default' é utilizado como "fim da linha", ou seja, 
                  * se o valor da variável passado não foi abrangido em nehum dos outros 
                  * casos (case), a varredura do 'switch' "entra" no caso (case) default'
                  * 
                  * Fazendo uma analogia, o caso (case) 'default' seria o 'ELSE', ou seja, 
                  * caso as outras todas condições falharem, "cairá" no caso 'ELSE'
                  */
            console.log('Nota inválida')
         // break // Como o caso (case) 'default' já é o último, não necessita da pausa (break)
    }
    console.log('Fim da varredura!')
    console.log('') // Quebra de linha
}

imprimirResultado(9.33)
imprimirResultado(8.3)
imprimirResultado(6.94)
imprimirResultado(3.2)
imprimirResultado({})