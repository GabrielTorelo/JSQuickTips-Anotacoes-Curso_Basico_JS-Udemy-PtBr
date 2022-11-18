/**
 * O laço 'for' lembra um laço 'while', compartilhando de algumas semelhanças, sendo elas:
 * 
 * # Existência de uma DECLARAÇÃO (variável na qual será utilizada para criarmos a 
 *   condição de repetição).
 * # Existência de uma EXPRESSÃO (condição na qual a variável deve seguir para continuar 
 *   o laço de repetição).
 * # Existência de um INCREMENTO (determina uma acréscimo a variável inicialmente declarada, 
 *   afim de constantemente mudarmos a condição de repetição).
 */

let contador = 1 // A DECLARAÇÃO é necessaria para criarmos uma variável para ser utilizada na expressão
while (contador <= 10) { // A EXPRESSÃO 'contador <= 10' é necessaria para estabelecer a condição de repetição do laço
    console.log(`contador = ${contador}`)
    contador++ // O INCREMENTO é necessario para determinarmos o fim da execução, impedindo o 'loop infinito'
}

console.log('') // Quebra de linha

for(let i = 1; i <= 10; i++){/**
                              * DECLARAÇÃO = 'let i = 1';
                              * EXPRESSÃO = 'i <= 10';
                              * INCREMENTO = 'i++'
                              */
    console.log(`i = ${i}`)
}

console.log('') // Quebra de linha

// Percorrendo Vetor (Array) usando 'for' \\
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
const notas2 = 'oiiii'

for (let i = 0; i < notas.length; i++) { /**
                                          * A propriedade (notação ponto) 'var.length', é uma 
                                          * propriedade padrão do JS para retornar a quantidade 
                                          * de caracteres de uma string ou o comprimento de um 
                                          * vetor (array)
                                          */
    const nota = notas[i];
    console.log(`Nota: ${nota}`);
}