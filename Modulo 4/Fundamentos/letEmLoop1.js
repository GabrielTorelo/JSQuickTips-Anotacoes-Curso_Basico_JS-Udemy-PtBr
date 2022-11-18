for (let i = 0; i < 10; i++){
    console.log(i)
}

//console.log(`i = ${i}`) // Retorna não definido (not defined)! 
                        /**
                         * Como a variável 'i' foi declarada como 'let',
                         * ela NÃO É VISÍVEL. Pois, 'let' tem scopo de bloco,
                         * logo, só vale dentro do laço FOR.
                         */