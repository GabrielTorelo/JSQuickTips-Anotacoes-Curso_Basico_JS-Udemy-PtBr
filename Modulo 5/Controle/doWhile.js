/**
 * A estrutura 'do while' é bem parecida com o estrutura 'while', no entanto, 
 * o 'do while' irá rodar pelo menos uma vez o código presente dentro do seu 
 * bloco, ou seja, mesmo que a variável 'opcao' tenha o valor inicial de '-1', 
 * o código ainda sim rodará pelo menos uma vez.
 */

const getInteiroAleatorioEntre = (min, max) => {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let opcao = 0;
/**
 * let opcao = -1
 *   # Se iniciarmos a variável 'opcao' com o valor '-1', 
 *   o laço será executado pelo menos uma vez!
 */

do{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida: ${opcao}`)
}while(opcao != -1) // Se verdadeiro (true) executa novamente, se falso (false) para a execução

console.log('Fim da Execução!')