const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log(funcs) /**
                    * Como o array 'Funcs' armazenou a função anônima (function anonymous) 
                    * cada vez que o laço 'FOR' rodou, foi armazenado no array 10x 
                    * a função anônima (function anonymous). Por estarmos utilizndo 'var',
                    * ao término do laço 'FOR' o valor de 'i' será 10, logo, ao chamarmos 
                    * qualquer posição da vetor, teremos o retorno 10.
                    */