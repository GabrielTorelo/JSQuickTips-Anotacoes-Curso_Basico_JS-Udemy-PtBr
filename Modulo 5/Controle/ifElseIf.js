Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = nota => {
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4,6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }

//  console.log('Fim') // Após testar todas as condições, exibe o o 'Fim'
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(3.99)
imprimirResultado(-1)
imprimirResultado(11)