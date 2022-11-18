const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

console.log(funcs) /**
                    * Como o array 'Funcs' armazenou a função anônima (function anonymous) 
                    * cada vez que o laço 'FOR' rodou, foi armazenado no array 10x 
                    * a função anônima (function anonymous). Como estamos utilizando 'let', 
                    * o algoritmo consegue """lembrar""" qual era o valor de 'i' no momento
                    * que foi executado o push da função anônima (function anonymous) no array
                    */