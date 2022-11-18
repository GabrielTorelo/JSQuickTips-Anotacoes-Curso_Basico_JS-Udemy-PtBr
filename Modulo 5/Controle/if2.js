const teste1 = num => {
    if(num > 7) // Quando temos apenas 1 linha dentro do bloco 'if' não necessitamos utilizar de chaves '{}'
        console.log(num) // Nesse caso, apenas essa linhas será executada dentro do bloco 'if'
        console.log('Final') // Essa linha será executada FORA da condição do 'if' // Indiferente da indentação, sem as chaves '{}' no 'if', essa linha nunca será executado dentro do bloco 'if'
//  console.log('Final') // A Indentação correta seria assim
}

teste1(6) // Falso
console.log('') // Quebra de linha
teste1(8) // Verdadeiro
console.log('') // Quebra de linha

const teste2 = num => {
    if(num > 7);{ // Como temos um ';' logo após a condição do 'if', temos um 'if' com bloco vazio, ou seja, o ';' significa o fim do bloco 'if'
        console.log(num) // Nesse caso, a variável 'num' será exibida indiferente da condição 'if', pois, está fora do bloco 'if'
    }

    /**
     *  // Seria a mesma coisa que isso: \\
     *  
     *          if(num > 7);
     *          
     *          {
     *              console.log(num)
     *          }
     */
}