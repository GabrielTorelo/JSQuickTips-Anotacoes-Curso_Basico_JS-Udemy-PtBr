const fabricantes = ['Mercedes', 'Audi', 'BMW'] 

function imprimir(nome, indice){ // Função que pdoer ser passada para um forEach
    console.log(`${indice + 1} | ${nome}`);
}

fabricantes.forEach(imprimir) /**
                               * Para cada elemento que o 'forEach' encontrar dentro do array,
                               * ele vai fazer um callback (chamar de volta)
                               */

console.log('') // Quebra de linha

// Usando a propriedade de escopo de bloco das variáveis do tipo 'let' \\
{
    let i = 1

    fabricantes.forEach(function (fab){
        console.log(`${i++} . ${fab}`) // Imprime cada elemento presente no array
    })
}

console.log('') // Quebra de linha

{
    let i = 1 /**
               * Como variáveis criadas com o tipo 'let' tem escopo de bloco, posso
               * criar uma variável com o mesmo nome da variável do bloco acima
               */

    fabricantes.forEach(fab => console.log(`${i++} - ${fab}`)) /**
                                                             * Também é possivel fazer com 
                                                             * função arrow (arrow function)
                                                             */
}

