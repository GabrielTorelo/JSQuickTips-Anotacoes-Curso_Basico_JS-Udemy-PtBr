/**
 * While é uma estrutura usada quando se tem uma quantidade 
 * indeterminada de repetições.
 * 
 * Via de Regra, o while é usado quando se tem o "FIM", porém não o "COMEÇO". Ou seja,
 * é usada quando vc sabe a condição de parada, porém, não sabe quantas repetições serão 
 * necessarias para chegarmos até ela.
 */

const getInteiroAleatorioEntre = (min, max) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// let opcao = -1 // Se iniciarmos a variável 'opcao' com o valor '-1', o laço não será executado
let opcao = 0

while (opcao != -1){ /**
                      * While é uma estrutura de laço, que necessita receber uma expessão
                      * verdadeira (true) para executar o laço, enquanto essa expessão for
                      * verdadeira (true) ele continua executando o laço N vezes. A partir
                      * do momento que a expessão se torna falsa (false), o laço para de ser
                      * executado
                      */
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}`)
}

console.log('Fim da Execução!')